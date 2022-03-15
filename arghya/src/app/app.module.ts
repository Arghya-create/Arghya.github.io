import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SnapsComponent } from './snaps/snaps.component';
import { CvComponent } from './cv/cv.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectsComponent,
    SnapsComponent,
    CvComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
