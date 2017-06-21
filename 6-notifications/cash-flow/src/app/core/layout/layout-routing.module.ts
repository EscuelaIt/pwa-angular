import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/routes/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'operations',
    loadChildren: './../../routes/operations/operations.module#OperationsModule'
  },
  {
    path: 'worker',
    loadChildren: './../../routes/worker/worker.module#WorkerModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
