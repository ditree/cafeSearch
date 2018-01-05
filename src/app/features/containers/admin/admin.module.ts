import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DataLoaderComponent } from './data-loader/data-loader.component';
import { ManageCafesComponent } from './manage-cafes/manage-cafes.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { ManageCafeService } from './services/manage-cafe.service';
import { ManagePostsService } from './services/manage-posts.service';
import { EditCafeComponent } from './edit-cafe/edit-cafe.component';
import { SharedModule } from '../../../utils/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        DataLoaderComponent,
        ManageCafesComponent,
        ManagePostsComponent,
        EditCafeComponent
    ],
    entryComponents: [
        EditCafeComponent
    ],
    providers: [
        ManageCafeService,
        ManagePostsService
    ]
})
export class AdminModule {}
