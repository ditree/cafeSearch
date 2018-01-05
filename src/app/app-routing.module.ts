import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './utils/components/page-notfound/page-notfound.component';
import { AuthGuardService } from './features/containers/admin/services/auth-guard.service';
import { SearchByNameComponent } from './features/containers/search/search-by-name/search-by-name.component';
import { SearchByLocationComponent } from './features/containers/search/search-by-location/search-by-location.component';
import { CafeListComponent } from './features/containers/search/cafe-list/cafe-list.component';
import { CafeDetailComponent } from './features/containers/search/cafe-detail/cafe-detail.component';
import { PostListComponent } from './features/containers/search/post-list/post-list.component';
import { PostDetailComponent } from './features/containers/search/post-detail/post-detail.component';
import { SearchComponent } from './features/containers/search/search/search.component';
const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent,

            children: [
                {path: 'searchByName', component: SearchByNameComponent},
                {path: 'searchByLocation', component: SearchByLocationComponent},
                {path: 'cafe/:id', component: CafeDetailComponent},
                {path: '', component: SearchByNameComponent}
            ]
    },
    {
        path: 'admin',
        loadChildren: 'app/features/containers/admin/admin.module#AdminModule',
        canLoad: [AuthGuardService]
     },
    {
        path: '',
        redirectTo: 'search',
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
