import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  message: string;
  constructor() { }

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}
