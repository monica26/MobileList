import { Component, OnInit } from '@angular/core';
import { Phone } from '../../shared/models/phone.model';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {

  public phone: Phone;
  public phoneList: Array<Phone>;
  public alias;
  public deleteOption = false;
  public delete = false;
  public itemSelected;
  public itemSelectedMobile;

  constructor() { }

  ngOnInit() {
    this.phone = new Phone('', null);

    if (localStorage.getItem('PhoneList')) {
      this.phoneList = JSON.parse(localStorage.getItem('PhoneList'));
    } else {
      this.phoneList = [];
    }
   }

  mouseLeave(element) {
    this.delete = false;
    this.itemSelected = null;
  }

  mouseEnter(element) {
    this.delete = true;
    this.itemSelected = element;
  }

  deletePhone(element: number) {
    this.phoneList.splice(element, 1);
    if (this.phoneList.length <= 0) {
      this.itemSelected = null;
      this.itemSelectedMobile = null;
    }
  }

  addPhone() {
    this.phoneList.push(this.phone);
    this.phone = new Phone('', null);
    localStorage.setItem('PhoneList', JSON.stringify(this.phoneList));
  }

  openDeleteOption(element) {
    this.itemSelectedMobile = element;
    this.deleteOption ? this.deleteOption = false : this.deleteOption = true;
  }

}
