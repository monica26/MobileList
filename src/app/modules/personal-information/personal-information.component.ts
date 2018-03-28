import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../personal-information/contactForm';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
