import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {GET, HttpService} from '../../utils/http-service';
import {ISSUE_BASE_URL} from './issue.constants';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class IssueService {
  private _issues: BehaviorSubject<object[]> = new BehaviorSubject([]);
  private _error: BehaviorSubject<object> = new BehaviorSubject(null);


  constructor(private httpService: HttpService) {
  }

  public get issues() {
    return this._issues.asObservable();
  }
  public get error() {
    return this._error.asObservable();
  }
  public getIssues(page: number = 1) {
    return this.httpService
      .setUrl(ISSUE_BASE_URL)
      .setQueryParams('page', page)
      .send(GET)
      .subscribe((data: Array<any>) => {
        console.log('data ', data);
        this._issues.next(data);
      }, (err: any) => {
        this._error.next(err);
      });
  }

}
