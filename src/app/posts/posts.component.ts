import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
          .then((posts: PostsModel[]) =>{
               this.posts = posts;
          })

      

  }

    darLike(id){
       this.posts[id-1].qtdLikes++;
    }

    deletar(id){
        console.log(this.posts[id-1]);
    }
    adicionarPost(){
      //this.postsService.addPost()

    }

}

 


