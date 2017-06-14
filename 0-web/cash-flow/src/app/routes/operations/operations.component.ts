import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-operations',
  template: `
    <nav>
      <a routerLink="/operations/new">->New</a>
      <a routerLink="/operations/list">   ->List</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OperationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
