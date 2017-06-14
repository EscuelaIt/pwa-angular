import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-main-content',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
