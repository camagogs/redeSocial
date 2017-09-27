import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { POSTS } from './posts-mock';
import { PostsModel } from './posts.model';

@Injectable()
export class PostsService {
 
  private url: string = "http://rest.learncode.academy/api/learncode/angular%202";

  constructor (
      private http: Http
  ){}

  getPosts(): Promise<PostsModel[]>{
    return Promise.resolve(POSTS);
  }


  addPost(post){
    return this.http.post(this.url, JSON.stringify(post))
      .map(res => res.json());
  }
  
}
