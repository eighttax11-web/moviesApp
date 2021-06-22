import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MDBResponse } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  key: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getFeature() {
    return this.http.get<MDBResponse>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&primary_release_date.gte=2021-06-01&primary_release_date.lte=2021-06-30&language=es&include_image_language=es`);
  }
}
