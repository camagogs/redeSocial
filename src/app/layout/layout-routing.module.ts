import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from '../perfil/perfil.component';
import { PostsComponent } from '../posts/posts.component';
import { NovoPostComponent } from '../novo-post/novo-post.component';
const layoutRoutes: Routes = [
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent
    },
    {
        path: 'posts/novo-post',
        component: NovoPostComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(layoutRoutes)
    ],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}