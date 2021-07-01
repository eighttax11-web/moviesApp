import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowposterComponent } from './slideshowposter/slideshowposter.component';
import { SlidesshowParesComponent } from './slidesshow-pares/slidesshow-pares.component';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowposterComponent,
    SlidesshowParesComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowposterComponent,
    SlidesshowParesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
