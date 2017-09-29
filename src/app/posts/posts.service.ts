import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs';

import { POSTS } from './posts-mock';
import { PostsModel } from './posts.model';

@Injectable()
export class PostsService {
 
  private url: string = "http://rest.learncode.academy/api/camargo/redesocial2";

  constructor (
      private http: Http
  ){}

  getPosts(){
    return this.http.get(this.url)
      .map((res:Response)=>{
        return res.json()
      })
  }

  addPost(post){
    return this.http.post(this.url, post)
      
  }

  deletePost(id){    
    return this.http.delete(`http://rest.learncode.academy/api/camargo/redesocial2/${id}`)
     
  }

  Like(post){
    return this.http.put(`http://rest.learncode.academy/api/camargo/redesocial2/${post.id}`, post)
  }

  getPost(id){
    return this.http.get(`http://rest.learncode.academy/api/camargo/redesocial2/${id}`)
}
 
  atualizar(post){
    return this.http.put(`http://rest.learncode.academy/api/camargo/redesocial2/${post.id}` , post)
  }

}
