import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { MomentModule } from 'angular2-moment';
import {IssueComponent} from './issue.component';
import {IssueListComponent} from './components/issue-list/issue-list.component';
import {IssueService} from './issue.service';
import {IssueItemComponent} from './components/issue-list/issue-item/issue-item.component';


@NgModule({
  declarations: [
    IssueComponent,
    IssueListComponent,
    IssueItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MomentModule,
  ],
  providers: [
    IssueService
  ],
})
export class IssueModule {
}
