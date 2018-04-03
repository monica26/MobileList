import { Component, OnInit, Input } from '@angular/core';
import { ListSummary } from './../../models/listSummary.model';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.scss']
})
export class DataSummaryComponent implements OnInit {

  @Input() list: Array<ListSummary>;
  @Input() sectionTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
