import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMyselfComponent } from './components/about-myself/about-myself.component';
import { CodingComponent } from './components/coding/coding.component';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  {path: 'about-myself', component: AboutMyselfComponent},
  {path: 'my-coding-practices', component: CodingComponent},
  {path: 'my-gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
