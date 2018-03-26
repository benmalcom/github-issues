import {Component, OnInit} from '@angular/core';
import {IssueService} from "../../issue.service";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
})
export class IssueListComponent implements OnInit {

  issues: any;
  constructor(private issueService: IssueService) {
  }

  ngOnInit() {
    this.issues = this.issueService.issues;
    this.issueService.getIssues(1);
  }

}
