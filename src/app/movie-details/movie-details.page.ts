import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movieId: string;
  loadedMovie: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // if (!paramMap.has('movieId')) {
      //   this.router.navigate(['/tabs/Home']);
      //   return;
      // }
      // const movieId = paramMap.get('movieId');
      // this.movieId = this.activatedRoute.snapshot.queryParams.id;
      console.log(this.movieId);
      this.movieService.getVideo(this.movieId).subscribe(
        (res: any) => {
          this.loadedMovie = res;
        });
      console.log(this.movieId);
      // console.log(Object.prototype.toString.call(this.loadedMovie));
    });
  }

}
