import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCafesComponent } from './manage-cafes/manage-cafes.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuardService],
                children: [
                    {path: 'cafes', component: ManageCafesComponent},
                    {path: 'posts', component: ManagePostsComponent},
                    {path: '', component: AdminDashboardComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}
