import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {

  phoneList = [
    {alias: 'Pepe', number: '6262626262'},
    {alias: 'Juan', number: '88872342'},
    {alias: 'Ana', number: '222134222'},
    {alias: 'Maria', number: '09877765'},
    {alias: 'Luis', number: '34522344'},
    {alias: 'Jose', number: '1234567'}
 ];
 public delete = false;
 public itemHover;

  constructor() { }

  ngOnInit() {
  }

  // funcion activada por mouseover al pasar por encima del elemento

  mouseOver(element) {
    console.log('mouseOver -> ' + element);
    this.delete = true;
    this.itemHover = element;
  }

  mouseOut(element) {
    console.log('mouseOut -> ' + element);
    this.delete = false;
    this.itemHover = -1;
  }


}
