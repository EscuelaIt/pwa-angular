import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorsService {

  constructor() { }

  positiveNumber(control: AbstractControl) {
    let error = null;
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0)) {
      error = { 'positive': 'Must be a positive number' };
    }
    return error;
  }
}
