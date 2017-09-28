import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsModel } from '../posts/posts.model';

@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.css']
})
export class NovoPostComponent implements OnInit {
  texto: string='';
  post: PostsModel;
  constructor(
      private postsService: PostsService
  ) { }
  ngOnInit() {

    
    this.post= {id: 10, nomePessoa: 'José da Silva', texto: "", qtdLikes: 0}

}

  adicionarPost(){
        this.post.texto = this.texto;
        console.log(this.post);
        this.postsService.addPost(this.post)
          .subscribe(post=>{})
  }
}
