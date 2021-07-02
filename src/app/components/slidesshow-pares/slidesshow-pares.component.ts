import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-slidesshow-pares',
  templateUrl: './slidesshow-pares.component.html',
  styleUrls: ['./slidesshow-pares.component.scss'],
})
export class SlidesshowParesComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10 
  }
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  loadMovies() {
    this.cargarMas.emit();
  }

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
