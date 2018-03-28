import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MomentModule} from 'angular2-moment';
import {IssueComponent} from './issue.component';
import {IssueListComponent} from './components/issue-list/issue-list.component';
import {IssueService} from './issue.service';
import {IssueItemComponent} from './components/issue-list/issue-item/issue-item.component';
import {IssueDetailComponent} from './components/issue-detail/issue-detail.component';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { BsDropdownModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        IssueComponent,
        IssueListComponent,
        IssueItemComponent,
        IssueDetailComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        MomentModule,
        MarkdownToHtmlModule.forRoot(),
        BsDropdownModule.forRoot(),
    ],
    providers: [
        IssueService
    ],
})
export class IssueModule {
}
