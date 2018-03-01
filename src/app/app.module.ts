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
import { CafeDetailComponent } from './features/containers/search/cafe-detail/cafe-detail.component';
import { PostDetailComponent } from './features/containers/search/post-detail/post-detail.component';
import { ModalErrorComponent } from './core/components/modal-error/modal-error.component';
import { SearchComponent } from './features/containers/search/search/search.component';
import { SearchService } from './features/containers/search/services/search.service';
import { SearchDetailsService } from './features/containers/search/services/search-details.service';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
@NgModule({
  declarations: [
    AppComponent,
    PageNotfoundComponent,
    LoaderComponent,
    LoginComponent,
    SearchByNameComponent,
    SearchByLocationComponent,
    CafeDetailComponent,
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
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAG5wtDTPZIhhEac8P0g-bbcZrjvzRwUyM',
      libraries: ['places', 'geometry'],
      region: 'by',
      language: 'ru'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    SearchService,
    SearchDetailsService
  ],
  entryComponents: [
    ModalErrorComponent,
    PostDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
