import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';
import { HttpServerService } from '../../../../core/http-server/http-server.service';
import { IPost, Post } from '../../../data-models/posts';
import * as _ from 'lodash';

interface ICafePostList {
  title: string;
  details: any[];
}

@Injectable()
export class ManagePostsService {
  postPromise: any = {};
  postList: IPost[] = [];
  groupedList: ICafePostList[] = [];
  listLoading = false;

  constructor(private httpServer: HttpServerService) { }

  findPost(id: string): IPost {

    return _.find(this.postList, (item) => {
      return item.id === id;
    });
  }

  deletePost(id: string): Observable<boolean> {
    this.postPromise = this.httpServer.deleteHttp('/posts/' + id)
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

  getPosts(): Observable<IPost[]> {
    this.listLoading = true;
     this.postPromise = this.httpServer.getHttp('/posts').map((response: Response) => {
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
       this.groupedList = this.combineCollection(this.postList);
       console.log('Groupped post list', this.groupedList);
       this.listLoading = false;
       return Observable.of(this.postList);
     })
     .catch(reason => {
       console.log('Loading of posts was failed', reason);
       this.listLoading = false;
       throw Observable.throw(reason);
     });
     return this.postPromise;
   }

   combineCollection(list: IPost[]): ICafePostList[] {
    return _(list)
    .map(post => {
     return _.assign(post, {'title' : post.cafeID.title});
    })
    .groupBy((item) => {
      return item.title;
    })
    .map((value, key) => {
      return {title: key, details: value};
    })
    .value();
   }

}
