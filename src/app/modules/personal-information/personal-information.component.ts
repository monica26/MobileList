import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../shared/models/contact-form.model';
import { DataService } from '../../shared/services/data.service';


@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  contactForm = new ContactForm('', '', null, '', '', null);
  constructor(private data: DataService) {
  }

  ngOnInit() {
    const data = this.data.getLocalStorage('Personal-Information');
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
