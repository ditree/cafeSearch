import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF, Location } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './features/containers/admin/login-routing.module';
import { LoginComponent } from './features/containers/admin/login/login.component';
import * as _ from 'lodash';
import { PageNotfoundComponent } from './utils/components/page-notfound/page-notfound.component';
import { LoaderComponent } from './utils/components/loader/loader.component';
import { SearchByNameComponent } from './features/containers/search-by-name/search-by-name.component';
import { SearchByLocationComponent } from './features/containers/search-by-location/search-by-location.component';
import { CafeListComponent } from './features/components/cafe-list/cafe-list.component';
import { CafeDetailComponent } from './features/components/cafe-detail/cafe-detail.component';
import { PostListComponent } from './features/components/post-list/post-list.component';
import { PostDetailComponent } from './features/components/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotfoundComponent,
    LoaderComponent,
    LoginComponent,
    SearchByNameComponent,
    SearchByLocationComponent,
    CafeListComponent,
    CafeDetailComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
