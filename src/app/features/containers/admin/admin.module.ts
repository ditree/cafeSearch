import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCafesComponent } from './manage-cafes/manage-cafes.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCafesComponent,
        ManagePostsComponent
    ]
})
export class AdminModule {}
