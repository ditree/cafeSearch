import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';
import { HttpServerService } from '../../../../core/http-server/http-server.service';
import { ICafe, Cafe } from '../../../data-models/cafes';
import * as _ from 'lodash';
@Injectable()
export class SearchService {
  cafePromise: any = {};
  cafeList: ICafe[] = [];
  filteredList: ICafe[] = [];
  listLoading = false;
  searchValue = '';
  constructor(private httpServer: HttpServerService) { }

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
             photo: item.photo,
             rating: item.rating,
             schedule: {
                 mn: item.schedule.mn,
                 tu: item.schedule.tu,
                 we: item.schedule.we,
                 th: item.schedule.th,
                 fr: item.schedule.fr,
                 sa: item.schedule.sa,
                 su: item.schedule.su
             }
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

   filter(value: string) {
     console.log(this.cafeList);
     console.log(value);
      if (value === '' || value === null || value === undefined || _.isEmpty(this.cafeList)) {
        this.filteredList = [];
      } else {
        this.filteredList = _.filter(this.cafeList, (item) => {
          const title = _.lowerCase(item.title);
          const search = _.lowerCase(value);
          return title.indexOf(search) !== -1;
        });
        this.searchValue = value;
      }
      console.log('filtered list', this.filteredList);
   }
}
