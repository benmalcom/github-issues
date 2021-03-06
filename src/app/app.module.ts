import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {IssueModule} from './modules/issue/issue.module';
import {AppRoutingModule} from './app.routes';
import {HttpService} from './utils/http-service';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        LoadingBarHttpClientModule,
        IssueModule,
        AppRoutingModule,
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
