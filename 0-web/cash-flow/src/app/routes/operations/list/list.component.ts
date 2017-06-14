import { Component, OnInit } from '@angular/core';
import { Operation } from "app/routes/operations/_data/operation.model";
import { OperationsService } from "app/routes/operations/_data/operations.service";

@Component({
  selector: 'cf-list',
  template: `
    <header>
      <h5>List of operations</h5>
    </header>
    <main>
      <ul class="container">
        <cf-row *ngFor="let operation of operations"
            [operation]="operation"
            (delete)="onDelete(operation)">
        </cf-row>
      </ul>
    </main>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  public operations: Operation[];
  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
    this.getOperationList();
  }

  getOperationList() {
    this.operationsService
      .getOperations$()
      .subscribe(operations => this.operations = operations);
  }

  onDelete(operation) {
    this.operationsService
      .deleteOperation$(operation)
      .subscribe(r => this.getOperationList());
  }
}
