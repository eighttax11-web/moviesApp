import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MDBResponse } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey; 

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`

    return this.http.get<T>(query);
  }

  getPopulares() {
    const query = '/discover/movie?sort_by=popularity.desc';
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
}
