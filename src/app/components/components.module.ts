import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowposterComponent } from './slideshowposter/slideshowposter.component';
import { SlidesshowParesComponent } from './slidesshow-pares/slidesshow-pares.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowposterComponent,
    SlidesshowParesComponent,
    MovieDetailComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowposterComponent,
    SlidesshowParesComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
