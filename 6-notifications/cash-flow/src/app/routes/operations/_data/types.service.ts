import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class TypesService {
  private apiUrl = '/types';

  constructor(private http: Http) { }

  getAll() {
    return this.http.get(this.apiUrl);
  }
}
