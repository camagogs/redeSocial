import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PostsComponent } from './posts/posts.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { NovoPostComponent } from './novo-post/novo-post.component';
import { PostsService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavegadorComponent,
    PostsComponent,
    PerfilComponent,
    NovoPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutRoutingModule,
    HttpModule
  ],    
   
  providers: [
    PostsService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
