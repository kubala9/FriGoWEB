import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-awesome',
  template: `
    <p>
      inline awesome works! &lt;emosewa-gf&gt;
    </p>`,
  styles: [`
    p {
      unicode-bidi: bidi-override;
      direction: rtl;
      text-align: center;
    }`]
})
export class AwesomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
