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

//   phoneList = [
//     {alias: 'Pepe', number: '6262626262'},
//     {alias: 'Juan', number: '88872342'},
//     {alias: 'Ana', number: '222134222'},
//     {alias: 'Maria', number: '09877765'},
//     {alias: 'Luis', number: '34522344'},
//     {alias: 'Jose', number: '1234567'}
//  ];
 public delete = false;
 public itemSelected;

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
    this.itemSelected = -1;
  }

  mouseEnter(element) {
    this.delete = true;
    this.itemSelected = element;
  }

  deletePhone(element: number) {
    this.phoneList.splice(element, 1);
  }

  addPhone() {
    this.phoneList.push(this.phone);
    this.phone = new Phone('', null);
    localStorage.setItem('PhoneList', JSON.stringify(this.phoneList));
  }

  openDeleteOption() {
    this.deleteOption ? this.deleteOption = false : this.deleteOption = true;
  }

}
