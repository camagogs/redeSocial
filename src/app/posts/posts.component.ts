import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PostsModel } from './posts.model';
import { PostsService } from './posts.service';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: PostsModel[];

  constructor( 
      private postsService: PostsService
  ) { }
  
  ngOnInit() {
    
      this.postsService.getPosts()
          .subscribe((res) =>{
               this.posts = res;
        })
  }

    deletar(post){
        this.postsService.deletePost(post.id)
            .subscribe((res)=>{
                var indicePost:number = this.posts.indexOf(post);
                this.posts.splice(indicePost,1);
                console.log("Deletou",post);
        })    
    }       
    darLike(post){
        
       this.postsService.Like(post)
    }

}

