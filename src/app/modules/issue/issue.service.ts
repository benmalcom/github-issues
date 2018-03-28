import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpService} from '../../utils/http-service';
import {ISSUE_BASE_URL, ISSUE_SEARCH_URL} from './issue.constants';
import {Issue} from './issue';
import {Observable} from 'rxjs/Observable';
import {IssueComment} from './issue-comment';
import {mergeMap} from 'rxjs/operators';
import * as _ from 'underscore';


@Injectable()
export class IssueService {
    private _issues: BehaviorSubject<Issue[]> = <BehaviorSubject<Issue[]>>new BehaviorSubject([]);
    private _issue: BehaviorSubject<Issue> = <BehaviorSubject<Issue>>new BehaviorSubject(null);
    private _comments: BehaviorSubject<IssueComment[]> = <BehaviorSubject<IssueComment[]>>new BehaviorSubject(null);
    private _error: BehaviorSubject<object> = <BehaviorSubject<object>>new BehaviorSubject(null);


    constructor(private httpService: HttpService) {
    }

    public get issues(): Observable<Issue[]> {
        return this._issues.asObservable();
    }

    public get issue(): Observable<Issue> {
        return this._issue.asObservable();
    }

    public get comments(): Observable<IssueComment[]> {
        return this._comments.asObservable();
    }

    public get error() {
        return this._error.asObservable();
    }

    public getIssues(page: number = 1, query: object = null) {
        const request = this.httpService
            .setQueryParams('per_page', 10)
            .setQueryParams('page', page)
            .setUrl(ISSUE_BASE_URL);
            if (query && !_.isEmpty(query)) {
                _.each(query, (item, index) => request.setQueryParams(index, item));
            }
            request.send()
            .subscribe((data: Array<Issue>) => {
                this._issues.next(data);
            }, (err: any) => {
                this._error.next(err);
            });
    }

    public search(page: number = 1, query: string) {
        const url = ISSUE_SEARCH_URL + '?q=' + query;
        return this.httpService
            .setQueryParams('per_page', 10)
            .setUrl(url)
            .send()
            .subscribe((data: any) => {
                const items = data.items as Array<Issue>;
                this._issues.next(items);
            }, (err: any) => {
                this._error.next(err);
            });
    }
    public getIssue(number: number) {
        return this.httpService
            .setUrl(`${ISSUE_BASE_URL}/${number}`)
            .send()
            .pipe(mergeMap((data: Issue) => {
                this._issue.next(data);
                return this.httpService
                    .setUrl(data.comments_url)
                    .send();
                }))
                .subscribe((data: any) => {
                    this._comments.next(data);
                }, (err: any) => {
                    this._error.next(err);
                });
    }
}
