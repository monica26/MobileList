import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../shared/models/contactForm.model';
import { Phone } from '../../shared/models/phone.model';
import { ListSummary } from '../../shared/models/listSummary.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  public listPersonal: Array<ListSummary> = [];
  public listMobiles: Array<ListSummary> = [];
  public datosMobiles;

  // listPersonal = [
  //   { title: 'name', value: 'name' },
  //   { title: 'lastname', value: 'lastname' },
  //   { title: 'date', value: '2018/12/23' },
  //   { title: 'email', value: 'a@gmail.com' },
  //   { title: 'address', value: 'calle' },
  //   { title: 'zipcode', value: '1234567' }
  // ];

  // listMobiles = [
  //   { title: 'Pepe', value: '6262626262' },
  //   { title: 'Juan', value: '88872342' },
  //   { title: 'Ana', value: '222134222' },
  //   { title: 'Maria', value: '09877765' },
  //   { title: 'Luis', value: '34522344' },
  //   { title: 'Jose', value: '1234567' }
  // ];

  constructor() {
    const dataPersonal = JSON.parse(localStorage.getItem('Personal-Information'));
    if (!!dataPersonal) {
      Object.keys(dataPersonal).map(key => {
        let llave;
        switch (key) {
          case 'name':
            llave = 'Nombre';
            break;
          case 'lastname':
            llave = 'Apellidos';
            break;
          case 'date':
            llave = 'Fecha de nacimiento';
            break;
          case 'email':
            llave = 'Correo electrónico';
            break;
          case 'address':
            llave = 'Dirección';
            break;
          default:
            llave = 'Código postal';
        }
        this.listPersonal.push(new ListSummary(llave, dataPersonal[key]));
      });
    }
    const dataMobiles = JSON.parse(localStorage.getItem('PhoneList'));
    if (!!dataMobiles) {
      for (let i = 0; i < dataMobiles.length; i++) {
        this.listMobiles.push(new ListSummary(dataMobiles[i]['alias'], dataMobiles[i]['phone']));
      }
    }
  }

  ngOnInit() {
  }

}
