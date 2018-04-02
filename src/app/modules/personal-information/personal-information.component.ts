import { Component, OnInit } from '@angular/core';
import { ContactForm } from './contactForm';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  contactForm = new ContactForm('', '', null, '', '', null);
  constructor() {
  }

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('Personal-Information'));
    if (!!data) {
      this.contactForm = data;
    }
  }

  isNumber(value) {
    let valueIsNumber = false;
    if (!!value && value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        const character = value.charCodeAt(i);
        if (character >= 48 && character <= 57) {
          valueIsNumber = true;
        }
      }
    }
    return valueIsNumber;
  }
}
