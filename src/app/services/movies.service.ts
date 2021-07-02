import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre, MDBResponse, PeliculaDetalle, RespuestaCredits } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey; 

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPage = 499;

  public genres: Genre[] = [];

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`

    return this.http.get<T>(query);
  }

  getPopulares() {
    this.popularPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.executeQuery<MDBResponse>(query);
  }

  getFeature() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1,0).getDate();
    const month = hoy.getMonth() + 1;
    let mesString = month < 10 ? `0${month}` : month;

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const final = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.executeQuery<MDBResponse>(`/discover/movie?&primary_release_date.gte=${inicio}&primary_release_date.lte=${final}`);
  }

  getMovieDetail(id: string) {
    return this.executeQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActorMovies(id: string) {
    return this.executeQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }  

  loadGenres(): Promise<Genre[]> {
    return new Promise(resolve => {
      this.executeQuery(`/genre/movie/list?a=1`).subscribe(resp => {
        this.genres = resp['genres'];
        console.log(this.genres);
        resolve(this.genres);
      });
    })
  }
}
