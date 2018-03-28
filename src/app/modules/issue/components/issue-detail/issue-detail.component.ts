import {Component, OnInit} from '@angular/core';
import {IssueService} from '../../issue.service';
import {Issue} from '../../issue';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {IssueComment} from '../../issue-comment';


@Component({
    selector: 'app-issue-list',
    templateUrl: './issue-detail.component.html',
    styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

    issue: Issue;
    comments: IssueComment[];

    constructor(private issueService: IssueService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.issueService.issue.subscribe((issue) => {
            this.issue = issue;
        });
        this.issueService.comments.subscribe((comments) => {
            this.comments = comments;
        });
        this.route.params.subscribe((param) => {
            this.issueService.getIssue(param['id']);
        });
    }

}
