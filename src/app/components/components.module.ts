import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowposterComponent } from './slideshowposter/slideshowposter.component';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowposterComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowposterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
