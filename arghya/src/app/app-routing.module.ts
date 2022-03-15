import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SnapsComponent } from './snaps/snaps.component';

const routes: Routes = [
{path:'profile',component:ProfileComponent},
{path:'projects',component:ProjectsComponent},
{path:'snaps',component:SnapsComponent},
{path:'cv',component:CvComponent},
{path:'',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
