import { Component, OnInit } from '@angular/core';
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
  
  constructor(private moviesService: MoviesService) {}
  
  ngOnInit(): void {

    this.moviesService.getPopulares().subscribe(
      (resp: MDBResponse) => {
        console.log(resp);
        this.popularMovies = resp.results;
      }
    )

    this.moviesService.getFeature().subscribe(
      (resp: MDBResponse) => {
        console.log(resp);
        this.movies = resp.results;
      } 
    )
  }

}
