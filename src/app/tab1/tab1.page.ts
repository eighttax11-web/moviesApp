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

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  constructor(private moviesService: MoviesService) {}
  
  ngOnInit(): void {
    this.moviesService.getFeature().subscribe(
      (resp: MDBResponse) => {
        console.log(resp);
        this.movies = resp.results;
        console.log(this.movies);
      } 
    )
  }

}
