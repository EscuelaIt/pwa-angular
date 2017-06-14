import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormToolsService } from "app/core/shared/forms/form-tools.service";
import { ValidatorsService } from "app/core/shared/forms/validators.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [FormToolsService, ValidatorsService],
  exports: [ReactiveFormsModule]
})
export class SharedModule { }
