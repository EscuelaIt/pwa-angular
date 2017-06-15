import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OperationsService } from "app/routes/operations/_data/operations.service";
import { Operation } from "app/routes/operations/_data/operation.model";

@Component({
  selector: 'cf-item',
  template: `
    <p>
      item Works!
    </p>
    <h3>{{ operation | json }}</h3>
  `,
  styles: []
})
export class ItemComponent implements OnInit {

  public operation: Operation;

  constructor(private route: ActivatedRoute, private operationsService: OperationsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const _id = params['id'].toString();
        this.operationsService
          .getOperationById$(_id)
          .subscribe(r => this.operation = r);
      });
  }

}
