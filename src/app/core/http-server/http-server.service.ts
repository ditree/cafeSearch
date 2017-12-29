import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../components/modal-error/modal-error.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as _ from 'lodash';

@Injectable()
export class HttpServerService {

  public headers: any = {};

  protected endpointUrl: string;

  constructor(
    protected http: Http,
    private modalService: NgbModal,
    public dialog: MatDialog
  ) {
    this.endpointUrl = '/api';
  }

  setHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  removeHeader(key: string) {
    delete this.headers[key];
  }

  private setErrorModal(err: string) {
    /*const modalRef = this.modalService.open(ModalErrorComponent,
       {size: 'sm', backdrop: 'static', keyboard: false});
    modalRef.componentInstance.message = 'General error';*/
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      width: '250px',
      data: { message:  err}
    });

    /*dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });*/
  }

  postHttp(url: string, data: object, options?: RequestOptionsArgs): Observable<{} | Response> {
    return this.post(url, data, options)
    .flatMap(result => {
      return Observable.of(result);
    })
    .catch(error => {
      if (error.status === 500 || error.status === 0) {
        this.setErrorModal('General error');
      } else if (error.status === 400) {
        this.setErrorModal('Not valid request');
      }  else if (error.status === 401) {
        this.setErrorModal('Unauthorized');
      }
      throw Observable.throw(error);
    });
  }

  getHttp(url: string, options?: RequestOptionsArgs): Observable<{} | Response> {
    return this.get(url, options)
    .flatMap(result => {
      return Observable.of(result);
    })
    .catch(error => {
      console.log('error', error);
      if (error.status === 500 || error.status === 0) {
        this.setErrorModal('General error');
      } else if (error.status === 400) {
        this.setErrorModal('Not valid request');
      }  else if (error.status === 401) {
        this.setErrorModal('Unauthorized');
      }
      throw Observable.throw(error);
    });
  }

  putHttp(url: string, data: object, options?: RequestOptionsArgs): Observable<{} | Response> {
    return this.put(url, data, options)
    .flatMap(result => {
      return Observable.of(result);
    })
    .catch(error => {
      if (error.status === 500 || error.status === 0) {
        this.setErrorModal('General error');
      } else if (error.status === 400) {
        this.setErrorModal('Not valid request');
      }  else if (error.status === 401) {
        this.setErrorModal('Unauthorized');
      }
      throw Observable.throw(error);
    });
  }

  deleteHttp(url: string, options?: RequestOptionsArgs): Observable<{} | Response> {
    return this.delete(url, options)
    .flatMap(result => {
      return Observable.of(result);
    })
    .catch(error => {
      if (error.status === 500 || error.status === 0) {
        this.setErrorModal('General error');
      } else if (error.status === 400) {
        this.setErrorModal('Not valid request');
      }  else if (error.status === 401) {
        this.setErrorModal('Unauthorized');
      }
      throw Observable.throw(error);
    });
  }

  private get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(this.generateUrl(url), this.generateOptions(options))
      .map(this.responseHandler, this);
  }

  private post(url: string, data: object, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.post(this.generateUrl(url), JSON.stringify(data), this.generateOptions(options))
    .map(this.responseHandler, this);
  }

  private put(url: string, data: Object, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(this.generateUrl(url), JSON.stringify(data), this.generateOptions(options))
    .map(this.responseHandler, this);
  }

  private patch(url: string, data: Object, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(this.generateUrl(url), JSON.stringify(data), this.generateOptions(options))
    .map(this.responseHandler, this);
  }

  private delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.delete(this.generateUrl(url), this.generateOptions(options))
    .map(this.responseHandler, this);
  }

  protected responseHandler(resp: Response): Response {
    try {
      return resp.json();
    } catch (ex) {
      return (<any>resp)._body;
    }
  }

  protected generateUrl(url: string): string {
    return !!url.match(/^((?:http(|s):\/\/www\.)|(?:http:\/\/))/) ? url : this.endpointUrl + url;
  }

  protected generateOptions(options: RequestOptionsArgs = {}): RequestOptionsArgs {
    if (!options.headers) {
      options.headers = new Headers({ 'Content-Type': ['application/json'] });
    }
    Object.keys(this.headers)
    .filter((key) => this.headers.hasOwnProperty(key))
    .forEach((key) => {
        options.headers.append(key, this.headers[key]);
    });
    return options;
  }
}
