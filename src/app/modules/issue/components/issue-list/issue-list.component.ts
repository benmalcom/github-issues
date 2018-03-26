import {Component, OnInit} from '@angular/core';
import {IssueService} from "../../issue.service";
import {Issue} from "../../issue";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Observable<Issue[]>;
  constructor(private issueService: IssueService) {
  }

  ngOnInit() {
    this.issues = this.issueService.issues;
    this.issueService.getIssues(1);
  }

}
