import {Component} from "@angular/core";
import {Page} from 'ui/page';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

@Component({
    selector: "my-app",
    template: `<page-router-outlet></page-router-outlet>`,
    directives: [NS_ROUTER_DIRECTIVES]
})
export class AppComponent {
    
}