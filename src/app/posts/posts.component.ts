import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { POSTS } from './posts-mock';
import { PostsModel } from './posts.model';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: PostsModel[] = POSTS;

  constructor() { }
  
  ngOnInit() {
    
      console.log(POSTS)

    
  }

  darLike(id){
    POSTS[id-1].qtdLikes++;
  }

}
