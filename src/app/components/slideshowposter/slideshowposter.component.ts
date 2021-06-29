import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

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
  constructor() { }

  ngOnInit() {}

}
