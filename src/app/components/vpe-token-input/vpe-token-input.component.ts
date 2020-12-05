import { Component, Input, OnChanges, Output, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { VapaeeDEX, AssetDEX } from 'projects/vapaee/dex';
import { LocalStringsService } from 'src/app/services/common/common.services';
import { VpeComponentsService, Device } from '../vpe-components.service';
import { Subscriber } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import BigNumber from 'bignumber.js';


@Component({
    selector: 'vpe-token-input',
    templateUrl: './vpe-token-input.component.html',
    styleUrls: ['./vpe-token-input.component.scss']
})
export class VpeTokenInputComponent implements OnChanges, OnInit, OnDestroy {

    private prev: string;
    @Input() public asset: AssetDEX;
    @Input() public placeholder: string;
    @Input() public button: string;
    @Input() public precision: number;
    @Input() public disabled: boolean;
    @Input() public loading: boolean;
    @Input() @Output() public error: string;
    @Output() valueChange: EventEmitter<any> = new EventEmitter();
    @Output() valueEnter: EventEmitter<any> = new EventEmitter();
    private onResizeSubscriber: Subscriber<any>;
    public text: string;
    @HostBinding('class') class = '';
    constructor(
        public dex: VapaeeDEX,
        public local: LocalStringsService,
        public service: VpeComponentsService,
        private modalService: NgbModal
    ) {
        this.precision = -1;
    }

    ngOnInit() {
        // console.log("TOKENINPUT ---------------->  ngOnInit()");
        this.onResizeSubscriber = new Subscriber<string>(this.onResize.bind(this));
        this.service.onResize.subscribe(this.onResizeSubscriber);
        this.onResize(this.service.device);
    }

    ngOnDestroy() {
        this.onResizeSubscriber.unsubscribe();
    }

    onResize(device:Device){
        this.class = this.service.device.class;
        // console.log("RESIZE: ", this.class);
    }

    private updateAsset(ctrl:any, text:any) {
        try {
            if (this.asset && text.length > 0) {
                var newAsset = new AssetDEX(text + " " + this.asset.token.symbol, this.dex);
                this.asset.amount = newAsset.amount;
                this.ngOnChanges();
            }
        } catch(e) {
            console.error(e);
        }
    }

    onEnter(event) {
        event.stopPropagation();
        this.ngOnChanges();
        setTimeout(_ => {
            this.valueEnter.emit(this.asset);
        }, 0);
    }

    onClick(content){
        if (this.service.device.portrait) {
            console.log("Abrir modal");
            this.open(content);
        }
    }

    onChange(ctrl:any, text:any) {
        if (text == "") text = "0.0";
        this.updateAsset(ctrl, text);
    }

    onBlur(ctrl:any, event:any) {
        this.ngOnChanges();
    }

    ngOnChanges() {
        if (this.asset) {
            var precision = this.asset.token.precision;
            if (this.precision != -1) precision = this.precision;
            this.text = this.asset.toString(precision).split(" ")[0];
            // console.log("this.text" , this.text);
            if (this.text != this.prev) {
                this.prev = this.text;
                this.valueChange.emit(this.asset);
            }    
        }
    }

    // modal -------------
    closeResult: string;
    open(content) {
        this.typing = "";
        this.newtext = this.text;
        this.modalService.open(content, {centered: true}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    newtext: string;
    newasset: AssetDEX;
    typing: string;
    onFinish(confirm:boolean) {
        if (confirm) {
            this.updateAsset(null, this.newtext);
            this.ngOnChanges();    
        }
        if (this.modalService.hasOpenModals()) {
            this.modalService.dismissAll(this.asset);
        }
    }

    type(char:string, clear:boolean = false) {
        if (clear) {
            if (this.typing.length > 0) {
                console.log("this.typing: '"+ this.typing+ "'");
                this.typing = this.typing.substr(0, this.typing.length-1);
                console.log("this.typing: '"+ this.typing+ "'");
            }
            if (!this.typing) this.typing = "0";
        } else {
            if (this.typing == "0") this.typing = "";
            this.typing += char;
        }
        this.newtext = this.typing;
        
        var aux:any = null;
        try {
            aux = new BigNumber(this.newtext);
            aux = new AssetDEX(aux, this.asset.token);
            this.newasset = aux;
        } catch (e) {}
    }

    add(num:number) {
        console.log("add", num);

        this.typing = "";
        var x  = new BigNumber(this.newtext);
        x = x.plus(num);
        if (x.isLessThan(0)) {
            x = new BigNumber(0);
        }
        
        var aux = new AssetDEX(x, this.asset.token);
        this.newasset = aux;
        this.newtext = aux.valueToString(this.precision);
    }
}
