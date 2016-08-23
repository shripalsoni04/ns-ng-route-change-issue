import { Directive, ElementRef, OnInit } from '@angular/core';
import { Button } from 'ui/button';
import { isAndroid } from 'platform';
import * as application from 'application';

declare const android: any;

@Directive({
  selector: '.test-btn'
})
export class TestBtnDirective implements OnInit {

  constructor(private _el: ElementRef) { }

  setButtonBackground(btn: Button) {
    if (isAndroid) {
      btn.android.setBackgroundColor(0xFFFF0000);
    }
  }

  ngOnInit() {
    this.setButtonBackground(this._el.nativeElement);
  }
}
