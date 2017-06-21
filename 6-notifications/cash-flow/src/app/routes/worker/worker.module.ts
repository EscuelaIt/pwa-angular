import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerComponent } from './worker.component';
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: '',
    component: WorkerComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkerComponent]
})
export class WorkerModule { }
