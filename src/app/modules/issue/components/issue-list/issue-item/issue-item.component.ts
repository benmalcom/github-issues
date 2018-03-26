import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../../../issue';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})
export class IssueItemComponent implements OnInit {

  @Input('issue')
  issue: Issue;
  constructor() {
  }

  ngOnInit() {

  }

}
