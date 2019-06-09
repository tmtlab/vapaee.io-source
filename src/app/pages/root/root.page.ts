import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { AppService } from 'src/app/services/common/app.service';
import { LocalStringsService } from 'src/app/services/common/common.services';
import { ScatterService } from 'src/app/services/scatter.service';
import { VapaeeService } from 'src/app/services/vapaee.service';
import { VpeComponentsService } from 'src/app/components/vpe-components.service';

declare var $:any;

@Component({
    selector: 'root-page',
    templateUrl: './root.page.html',
    styleUrls: ['./root.page.scss']
})
export class RootPage implements OnInit {

    constructor(
        public app: AppService,
        public local: LocalStringsService,
        public elRef: ElementRef,
        public scatter: ScatterService,
        public vapaee: VapaeeService,
        private components: VpeComponentsService
    ) {
    }
    
    ngOnInit() {
        var network = "telos-testnet";
        network = "telos";
        // network = "local";
        if ( this.scatter.network.slug != network || !this.scatter.connected ) {
            this.scatter.setNetwork(network);
            this.scatter.connectApp("Vapaée - Telos DEX").catch(err => console.error(err));    
        }
    }

    collapseMenu() {
        var target = this.elRef.nativeElement.querySelector("#toggle-btn");
        var navbar = this.elRef.nativeElement.querySelector("#navbar");
        if (target && $(navbar).hasClass("show")) {
            $(target).click();
        }
    }
    
    debug(){
        console.log("--------------------------------");
        console.log("VPE", [this.vapaee]);
        console.log("Scatter", [this.scatter]);
        console.log("Components", [this.components]);
        console.log("--------------------------------");
    }

}
