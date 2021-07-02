import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() id;

  movie: PeliculaDetalle = {};
  actors: Cast[] = [];
  oculto: number = 150;
  estrella: string = 'star-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.moviesService.getMovieDetail(this.id).subscribe(
      resp => {
        this.movie = resp;
        console.log(this.movie);
      }
    )

    this.moviesService.getActorMovies(this.id).subscribe(
      resp => {
        this.actors = resp.cast;
      }
    )
  }

  regresar() {
    this.modalCtrl.dismiss();
  }
  
}
