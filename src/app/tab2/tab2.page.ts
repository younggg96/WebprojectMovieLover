import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  videos: any;
  topMovies: any;
  playingMovies: any;
  upComingMovies: any;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getTrendingWeeklyUrl().subscribe((res: any) => {
      this.videos = res.results;
      console.log(this.videos);
    });
    this.movieService.getTopRanked().subscribe((res: any) => {
      this.topMovies = res.results;
      console.log(this.topMovies);
    });
    this.movieService.getNowPlaying().subscribe((res: any) => {
      this.playingMovies = res.results;
      console.log(this.playingMovies);
    });
    this.movieService.getUpComing().subscribe((res: any) => {
      this.upComingMovies = res.results;
      console.log(this.playingMovies);
    });
  }

}
