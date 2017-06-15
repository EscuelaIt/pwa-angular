import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'cf-home',
  template: `
    <section class="container">
      <header >
        <h3>4-manifest</h3>
        <h5> 19:59 </h5>
      </header>
      <dl>
        <dt>Num Items:</dt>
        <dd>{{ numItems }} items</dd>
        <dt>Total:</dt>
        <dd>{{ total }} €</dd>
      </dl>
    </section>

  `,
  styles: []
})
export class HomeComponent implements OnInit {
  public items: any[];
  public numItems;
  public total;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http
      .get('http://localhost:3030/items')
      .subscribe(res => {
        this.total = 0;
        this.numItems = 0;
        this.items = res.json();
        if (this.items) {
          this.numItems = this.items.length;
          this.items.forEach(item => {
            this.total += item.amount;
          });
        }
      }
      );
  }

}
