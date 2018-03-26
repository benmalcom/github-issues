import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IssueComponent} from './modules/issue/issue.component';
import {ISSUE_ROUTES} from './modules/issue/issue.routes';

const routes: Routes = [
  {path: '', component: IssueComponent, children: ISSUE_ROUTES},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
