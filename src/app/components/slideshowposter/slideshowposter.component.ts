import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-slideshowposter',
  templateUrl: './slideshowposter.component.html',
  styleUrls: ['./slideshowposter.component.scss'],
})
export class SlideshowposterComponent implements OnInit {

  @Input() movies: Movie[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  }
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: string | number) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: {
        id
      }
    });
    
    modal.present();
  }
}
