import { Component, OnInit, Input} from '@angular/core';
import { Routes, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ContactForm } from '../../models/contactForm.model';

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

  constructor(private router: Router, private data: DataService) {
  }

  ngOnInit() {
  }

  clickButtonFooter(link) {
    if (!!this.contactForm) {
      this.data.setLocalStorage('Personal-Information', this.contactForm);
    }
    this.router.navigate(['/' + link]);
  }

}
