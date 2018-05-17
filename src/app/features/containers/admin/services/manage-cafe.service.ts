import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';
import { HttpServerService } from '../../../../core/http-server/http-server.service';
import { ICafe, Cafe } from '../../../data-models/cafes';
import * as _ from 'lodash';
@Injectable()
export class ManageCafeService {
  cafePromise: any = {};
  // cafeEditPromise: any = {};
  // cafeDeletePromise: any = {};
  cafeList: ICafe[] = [];
  listLoading = false;
  constructor(private httpServer: HttpServerService) { }

findCafe(id: string): ICafe {

  return _.find(this.cafeList, (item) => {
    return item.id === id;
  });
}

addCafe(newCafe: ICafe): Observable<boolean> {
  this.cafePromise = this.httpServer.postHttp('/cafes', newCafe)
  .map((response: Response) => {
    return (<any>response);
  })
  .flatMap(data => {
    console.log('result', data);
    return Observable.of(true);
  })
  .catch(reason => {
    console.log('error', reason);
    throw Observable.throw(reason);
  });
  return this.cafePromise;
}

editCafe(updatedCafe: ICafe): Observable<boolean> {
  this.cafePromise = this.httpServer.putHttp('/cafes/' + updatedCafe.id, updatedCafe)
  .map((response: Response) => {
    return (<any>response);
  })
  .flatMap(data => {
    console.log('result', data);
    return Observable.of(true);
  })
  .catch(reason => {
    console.log('error', reason);
    throw Observable.throw(reason);
  });
  return this.cafePromise;
}

deleteCafe(id: string): Observable<boolean> {
  this.cafePromise = this.httpServer.deleteHttp('/cafes/' + id)
  .map((response: Response) => {
    return (<any>response);
  })
  .flatMap(data => {
    console.log('result', data);
    return Observable.of(true);
  })
  .catch(reason => {
    console.log('error', reason);
    throw Observable.throw(reason);
  });
  return this.cafePromise;
}

 getCafes(): Observable<ICafe[]> {
   this.listLoading = true;
    this.cafePromise = this.httpServer.getHttp('/cafes').map((response: Response) => {
      return (<any>response).map(item => {
        return new Cafe({
            id: item._id,
            title: item.title,
            address: {
              unit: item.address.unit,
              house: item.address.house,
              street: item.address.street,
              city: item.address.city,
              country: item.address.country,
              postal: item.address.postal
            },
            position: {
                lat: item.position.lat,
                lng: item.position.lng
            },
            phone: item.phone,
            email: item.email,
            website: item.website,
            photo: item.photo.slice(),
            rating: item.rating,
            schedule: {
                mn: item.schedule.mn,
                tu: item.schedule.tu,
                we: item.schedule.we,
                th: item.schedule.th,
                fr: item.schedule.fr,
                sa: item.schedule.sa,
                su: item.schedule.su
            },
            menu: item.menu,
            description: item.description
        });
      });
    })
    .flatMap(result => {
      this.cafeList = <ICafe[]>result;
      console.log('cafe list', this.cafeList);
      this.listLoading = false;
      return Observable.of(this.cafeList);
    })
    .catch(reason => {
      console.log('Loading of cafes was failed', reason);
      this.listLoading = false;
      throw Observable.throw(reason);
    });
    return this.cafePromise;

  }

}
