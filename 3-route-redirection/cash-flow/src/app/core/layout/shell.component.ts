import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-shell',
  template: `
    <cf-top-bar></cf-top-bar>
    <cf-main-content></cf-main-content>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
