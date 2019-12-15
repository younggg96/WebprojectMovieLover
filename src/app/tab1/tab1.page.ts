import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // @Input('s') slide;
  slides: any;
  types: any;
  slideOpts = {
    effect: 'flip',
    autoplay: {
      delay: 2000,
    },
    loop: true
  };
  ngOnInit(): void {
    this.movieService.getTypeOfMovies().subscribe(
      (res: any) => {
        this.types = res.genres;
      }
    );
    this.movieService.getNowPlaying().subscribe(
      (res: any) => {
        this.slides = res.results;
      }
    );
  }
  constructor(private movieService: MoviesService) { }


}
