import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Button } from 'ui/button';
import { isAndroid } from 'platform';
import * as application from 'application';

declare const android: any;

@Directive({
  selector: '.test-btn'
})
export class TestBtnDirective implements OnInit, OnDestroy {
  private nsBtn: Button;

  constructor(private _el: ElementRef) { }

  setButtonBackground() {
    if (isAndroid) {
      this.nsBtn.android.setBackgroundColor(0xFFFF0000);
    }
  }

  ngOnInit() {
    this.nsBtn = <Button>this._el.nativeElement;

    // if the view has already loaded - set immediately
    if (this.nsBtn.isLoaded) {
      this.setButtonBackground();
    }

    // Attach the setter for future loaded events
    this.nsBtn.on("loaded", () => { this.setButtonBackground(); });
  }

  ngOnDestroy() {

    // Cleanup
    this.nsBtn.off("loaded");
    this.nsBtn = undefined;
  }
}
