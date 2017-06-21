import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cf-row',
  template: `
    <li>
      <a [routerLink]="['/operations',operation._id]"> {{ operation._id  }} </a> {{ operation.description  }} : {{ operation.amount  }} € <button (click)="onDeleteClick()" >Delete</button>
    </li>
  `,
  styles: []
})
export class RowComponent implements OnInit {

  @Input() public operation: any;
  @Output() public delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.delete.emit();
  }

}
