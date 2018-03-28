import {Component, OnInit} from '@angular/core';
import {IssueService} from '../../issue.service';
import {Issue} from '../../issue';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import * as _ from 'underscore';

@Component({
    selector: 'app-issue-list',
    templateUrl: './issue-list.component.html',
    styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

    issues: Observable<Issue[]>;
    query = ':is issue :is open';
    filters: object = {};
    page: number;
    constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(() => {
            window.scrollTo(0, 0);
        });
        this.page = this.route.snapshot.queryParams['page'] || 1;
        this.issues = this.issueService.issues;
        this.issueService.getIssues(this.page);
    }

    filterIssues(filters: object) {
        this.issueService.getIssues(this.page, filters);
    }

    searchIssues(query: string) {
        let qString = '';
        if (query.includes(':is open')) {
            qString += '+state:open';
            query = query.replace(/:is open/g, '');
            query += qString;
        }
        query += '+user:angular+repo:angular.js';
        this.issueService.search(this.page, query);
    }
    addFilter(e: Event, filter: string) {
        e.preventDefault();
        const filters = filter.split('=');
        this.filters[filters[0]] = filters[1];
        this.filterIssues(this.filters);
    }

}
