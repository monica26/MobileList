import { Component, OnInit, Input} from '@angular/core';
import { Routes, Router } from '@angular/router';
import { ContactForm } from './../../../modules/personal-information/contactForm';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() first?: boolean;
  @Input() end?: boolean;
  @Input() invalid?: boolean;
  @Input() routerLinkPrevious: string;
  @Input() routerLinkNext: string;
  @Input() contactForm: ContactForm;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  clickButtonFooter(link) {
    if (!!this.contactForm) {
      localStorage.setItem('Personal-Information', JSON.stringify(this.contactForm));
    }
    this.router.navigate(['/' + link]);
  }

}
