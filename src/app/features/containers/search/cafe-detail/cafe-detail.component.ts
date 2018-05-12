import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { SearchDetailsService } from '../services/search-details.service';
import { ILocation } from '../services/search.service';
import { ICafe, Cafe } from '../../../data-models/cafes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostDetailComponent } from '../post-detail/post-detail.component';
// import {  } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import * as _ from 'lodash';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit, OnDestroy {

  private id: string;
  private idSubscription: Subscription;
  public zoom = 15;
  public isExpended = false;
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

  constructor(private location: Location, private route: ActivatedRoute,
  private searchDetailsService: SearchDetailsService, public dialog: MatDialog) { }

  ngOnInit() {
      this.idSubscription = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.searchDetailsService.getCafe(this.id).subscribe();
   });

  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }

  goBack() {
    this.location.back();
  }

  isEmpty(obj) {
    return _.isEmpty(obj);
  }

  openModal() {
    const dialogRef = this.dialog.open(PostDetailComponent, {
      width: '650px',
      data: { post: {
        cafeID: {
          id: this.searchDetailsService.cafeDetail.id,
          title: this.searchDetailsService.cafeDetail.title
        },
        text: '',
        rate: 5,
        user: {
            name: '',
            email: '',
            phone: ''
        }
      } }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        console.log('add', result);
        this.searchDetailsService.addPost(result).subscribe(() => {
          this.searchDetailsService.getPosts(this.id).subscribe();
        });
      }
    });
  }

}
