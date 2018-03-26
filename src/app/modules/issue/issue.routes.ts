import {Routes} from '@angular/router';
import {IssueListComponent} from './components/issue-list/issue-list.component';

export const ISSUE_ROUTES: Routes = [
  {path: '', redirectTo: 'issues', pathMatch: 'full'},
  {path: 'issues', component: IssueListComponent},
];
