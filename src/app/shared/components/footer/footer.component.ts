import { Component, OnInit, Input} from '@angular/core';
import { Routes, Router } from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  clickButtonFooter(link) {
    this.router.navigate(['/' + link]);
  }

}
