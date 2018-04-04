import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ContactForm } from '../../shared/models/contactForm.model';

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
    return (!!value) ?
      value.split('').some(element => (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57))
      : false;
  }

  isNotNumber(value) {
    return (!!value) ?
      value.split('').some(element => (element.charCodeAt(0) < 48 || element.charCodeAt(0) > 57))
      : false;
  }
}
