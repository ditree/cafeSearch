import { Component, OnInit } from '@angular/core';
import { ManagePostsService } from '../services/manage-posts.service';
import { IPost, Post } from '../../../data-models/posts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css']
})
export class ManagePostsComponent implements OnInit {

  constructor(public postService: ManagePostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe();
  }

  delete(id) {
    console.log('delete called ', id);
    this.postService.deletePost(id).subscribe(() => {
      this.postService.getPosts().subscribe();
    });
  }

}
