import {Component} from "@angular/core";
import {Router} from '@angular/router';
import {Page} from 'ui/page';

import { TestBtnDirective } from '../../directives'

@Component({
    selector: "page1",
    templateUrl: "components/page1/page1.component.html",
    directives: [TestBtnDirective]
})
export class Page1Component {
    
    constructor(private router: Router){

    }

    goToPage2(){
        this.router.navigate(['/page2']);
    }
}