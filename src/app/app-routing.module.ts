import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NovoPostComponent } from './novo-post/novo-post.component';

const appRoutes: Routes = [

    {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
