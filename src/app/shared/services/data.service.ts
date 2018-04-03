import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  setLocalStorage(name, object) {
    localStorage.setItem(name, JSON.stringify(object));
  }

  getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
