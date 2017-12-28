import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpServerService } from './http-server.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpServerService]
})
export class HttpServerModule { }
