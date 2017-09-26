import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavegadorComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
