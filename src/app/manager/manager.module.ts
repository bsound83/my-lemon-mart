import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  imports: [CommonModule, ManagerRoutingModule, MaterialModule],
  declarations: [
    ManagerComponent,
    ManagerHomeComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
  ],
  providers: [AuthService, AuthGuardService],
})
export class ManagerModule {}
