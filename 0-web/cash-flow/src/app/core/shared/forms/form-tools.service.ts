import { FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormToolsService {

  constructor() { }

  getControl(form: FormGroup, controlName: string): AbstractControl {
    return form.controls[controlName];
  }

  hasChanges(control: AbstractControl): boolean {
    return control && (control.dirty || control.touched);
  }

  mustShowErrors(form: FormGroup, controlName: string) {
    let hasErrorsToShow = false;
    const control = this.getControl(form, controlName);
    if (this.hasChanges(control)) {
      hasErrorsToShow = control.errors != null;
    }
    return hasErrorsToShow;
  }

  getControlErrors(form: FormGroup, controlName: string): string {
    let controlErrors = "";
    const control = this.getControl(form, controlName);
    if (control && control.errors) {
      Object.keys(control.errors).forEach(error => {
        controlErrors += error;
      });
    }
    return controlErrors;
  }

  getDateForControl(date: Date): string {
    return date.toISOString().substring(0, 10)
  }

}
