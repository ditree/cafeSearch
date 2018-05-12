import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';
import { HttpServerService } from '../../../../core/http-server/http-server.service';
import { ICafe, Cafe } from '../../../data-models/cafes';
import { IPost, Post } from '../../../data-models/posts';
import * as _ from 'lodash';

@Injectable()
export class SearchDetailsService {
  cafePromise: any = {};
  postPromise: any = {};
  cafeDetail: ICafe = new Cafe();
  postList: IPost[];
  isLoading = false;

  constructor(private httpServer: HttpServerService) { }

  getCafe(id: string): Observable<ICafe> {
    this.isLoading = true;
     this.cafePromise = this.httpServer.getHttp('/cafes/' + id)
     .flatMap(response => {
        const result = <any>response;
        this.cafeDetail = new Cafe({
          id: result._id,
          title: result.title,
          address: {
            unit: result.address.unit,
            house: result.address.house,
            street: result.address.street,
            city: result.address.city,
            country: result.address.country,
            postal: result.address.postal
          },
          position: {
              lat: result.position.lat,
              lng: result.position.lng
          },
          phone: result.phone,
          email: result.email,
          website: result.website,
          photo: result.photo.slice(),
          rating: result.rating,
          schedule: {
              mn: result.schedule.mn,
              tu: result.schedule.tu,
              we: result.schedule.we,
              th: result.schedule.th,
              fr: result.schedule.fr,
              sa: result.schedule.sa,
              su: result.schedule.su
          },
          description: result.description
      });
       console.log('cafe ', this.cafeDetail);
       this.getPosts(id).subscribe();
       this.isLoading = false;
       return Observable.of(this.cafeDetail);
     })
     .catch(reason => {
       console.log('Loading of cafe was failed', reason);
       this.isLoading = false;
       throw Observable.throw(reason);
     });
     return this.cafePromise;
   }

   getPosts(id: string): Observable<IPost[]> {
       this.postPromise = this.httpServer.getHttp('/posts/' + id).map((response: Response) => {
         return (<any>response).map(item => {
           return new Post({
               id: item._id,
               cafeID: {
                id: item.cafeID._id,
                title: item.cafeID.title
               },
               text: item.text,
               rate: item.rate,
               user: {
                 name: item.user.name,
                 email: item.user.email,
                 phone: item.user.phone,
               },
               createdAt: item.createdAt
           });
         });
       })
       .flatMap(result => {
         this.postList = <IPost[]>result;
         console.log('post list', this.postList);
         return Observable.of(this.postList);
       })
       .catch(reason => {
         console.log('Loading of posts was failed', reason);
         throw Observable.throw(reason);
       });
       return this.postPromise;
     }

     addPost(newPost: any): Observable<boolean> {
       const post = newPost;
       post.cafeID = this.cafeDetail.id;
      this.postPromise = this.httpServer.postHttp('/posts', newPost)
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
      return this.postPromise;
    }

}
