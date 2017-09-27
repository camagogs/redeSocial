import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.css']
})
export class NovoPostComponent implements OnInit {
  text ="camargo"
  constructor() { }
  ngOnInit() {
  }
  
  adicionarPost(){
        //this.postsService.addPost()
          //.subscribe(post=>{

      //})
  }
}
