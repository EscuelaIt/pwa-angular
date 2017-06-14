import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-top-bar',
  template: `
    <nav>
      <a routerLink="/"><img src="./assets/logo.png" alt="Academia Binaria" height="42" width="42"></a>
      <a routerLink="/operations">   ->Operations</a>
      <a routerLink="/about">   ->About</a>
    </nav>
  `,
  styles: []
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
