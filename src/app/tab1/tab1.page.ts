import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MDBResponse, Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  movies: Movie[] = [];
  popularMovies: Movie[] = [];
  
  constructor(private moviesService: MoviesService,
              public toastController: ToastController) {}
  
  ngOnInit(): void {

    this.getPopulares();

    this.moviesService.getFeature().subscribe(
      (resp: MDBResponse) => {
        // console.log(resp);
        this.movies = resp.results;
      } 
    )
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe(
      (resp: MDBResponse) => {
        const temp = [...this.popularMovies, ...resp.results]
        this.popularMovies = temp;
      }, err => {
        this.presentToast();
      }
    )
  }

  cargarMas() {
    this.getPopulares();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ya no hay más paginas!!!',
      duration: 4000
    });
    toast.present();
  }
}
