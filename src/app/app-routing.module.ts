import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './utils/components/page-notfound/page-notfound.component';
import { AuthGuardService } from './features/containers/admin/auth-guard.service';
import { SearchByNameComponent } from './features/containers/search-by-name/search-by-name.component';
import { SearchByLocationComponent } from './features/containers/search-by-location/search-by-location.component';
import { CafeListComponent } from './features/components/cafe-list/cafe-list.component';
import { CafeDetailComponent } from './features/components/cafe-detail/cafe-detail.component';
import { PostListComponent } from './features/components/post-list/post-list.component';
import { PostDetailComponent } from './features/components/post-detail/post-detail.component';

const routes: Routes = [
    {
        path: 'searchByName',
        component: SearchByNameComponent,
        children: [
            {path: '', component: CafeListComponent},
            {
                path: 'cafe/:id',
                component: CafeDetailComponent,
                children: [
                            {path: 'posts', component: PostListComponent},
                            {path: 'newPost', component: PostDetailComponent}
                        ]
            }
        ]
    },
    {
        path: 'searchByLocation',
        component: SearchByLocationComponent,
        children: [
            {path: '', component: CafeListComponent},
            {
                path: 'cafe/:id',
                component: CafeDetailComponent,
                children: [
                            {path: 'posts', component: PostListComponent},
                            {path: 'newPost', component: PostDetailComponent}
                        ]
            }
        ]
    },
    {
        path: 'admin',
        loadChildren: 'app/features/containers/admin/admin.module#AdminModule',
        canLoad: [AuthGuardService]
      },

    {
        path: '',
        redirectTo: 'searchByName',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotfoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
