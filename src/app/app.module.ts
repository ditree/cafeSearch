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
import { HttpServerModule } from './core/http-server/http-server.module';
import { SharedModule } from './utils/shared/shared.module';
import { LoginComponent } from './features/containers/admin/login/login.component';
import * as _ from 'lodash';
import { PageNotfoundComponent } from './utils/components/page-notfound/page-notfound.component';
import { LoaderComponent } from './utils/components/loader/loader.component';
import { SearchByNameComponent } from './features/containers/search/search-by-name/search-by-name.component';
import { SearchByLocationComponent } from './features/containers/search/search-by-location/search-by-location.component';
import { CafeListComponent } from './features/containers/search/cafe-list/cafe-list.component';
import { CafeDetailComponent } from './features/containers/search/cafe-detail/cafe-detail.component';
import { PostListComponent } from './features/containers/search/post-list/post-list.component';
import { PostDetailComponent } from './features/containers/search/post-detail/post-detail.component';
import { ModalErrorComponent } from './core/components/modal-error/modal-error.component';
import { SearchComponent } from './features/containers/search/search/search.component';

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
    PostDetailComponent,
    ModalErrorComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LoginRoutingModule,
    AppRoutingModule,
    HttpServerModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    ModalErrorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
