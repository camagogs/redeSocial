import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostsService } from '../posts/posts.service';
import { PostsModel } from '../posts/posts.model';

@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.css']
})
export class NovoPostComponent implements OnInit {
  texto: string='';
  post: PostsModel;
  post2: PostsModel;
  constructor(
      private postsService: PostsService,
      private route: ActivatedRoute,
      private location: Location
  ) {
    
   }
  ngOnInit():void {

    this.post2 ={id: 0,texto :"", nomePessoa:"",qtdLikes:0};
    
    
    this.route.params.forEach((params: Params ) => {
      let id: number = params['id'];
      this.postsService.getPost(id)
        .subscribe((res) =>{
             this.post2 = res.json()
      })   
  })
}

adicionarPost(){
       if(this.post2.id != 0){       
            this.post2.texto = this.texto;
            this.postsService.atualizar(this.post2)
                .subscribe(post=>{})
       } else {
            this.post2.texto = this.texto;
            this.postsService.addPost(this.post2)
               .subscribe(post=>{})
       }  
      }
    } 


