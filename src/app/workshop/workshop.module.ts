import { UserService } from './users/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule,Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { EditComponent } from '../workshop/profile/edit/edit.component';
import { ViewComponent } from '../workshop/profile/view/view.component';
import { UserprofileComponent } from '../workshop/users/userprofile/userprofile.component';
import { UserslistComponent } from '../workshop/users/userslist/userslist.component';

import { ProfileService } from '../workshop/profile/profile.service';
import { MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

const routes: Routes = [
  { path: 'myProfile-edit', component: EditComponent},
  { path: 'myProfile', component: ViewComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'userslist', component: UserslistComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule.forRoot(routes, { useHash: false }),
    MatFormFieldModule
  ],
  declarations: [
    EditComponent,
    ViewComponent,
    UserprofileComponent,
    UserslistComponent
  ],
  exports: [RouterModule],
  providers: [UserService, ProfileService]
})
export class WorkshopModule { }
