import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from 'app/routes/operations/operations.component';
import { NewComponent } from 'app/routes/operations/new/new.component';
import { ListComponent } from 'app/routes/operations/list/list.component';
import { ItemComponent } from "app/routes/operations/item/item.component";

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  },
  {
    path: ':id',
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
