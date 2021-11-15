import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SnapsComponent } from './snaps/snaps.component';

const routes: Routes = [
{path:'profile',component:ProfileComponent},
{path:'projects',component:ProjectsComponent},
{path:'snaps',component:SnapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
