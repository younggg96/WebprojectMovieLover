import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  KEY = 'https://api.themoviedb.org/3';
  trendingWeeklyUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=ba8775735062389ee9c74144405d38ba';
  topRankedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ba8775735062389ee9c74144405d38ba';
  typeOfMovies = 'https://api.themoviedb.org/3/genre/movie/list?api_key=ba8775735062389ee9c74144405d38ba';
  nowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ba8775735062389ee9c74144405d38ba';
  upComing = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ba8775735062389ee9c74144405d38ba';

  constructor(private http: HttpClient) { }

  getTopRanked() {
    return this.http.get(this.topRankedUrl);
  }
  getTypeOfMovies() {
    return this.http.get(this.typeOfMovies);
  }
  getNowPlaying() {
    return this.http.get(this.nowPlaying);
  }
  getTrendingWeeklyUrl() {
    return this.http.get(this.trendingWeeklyUrl);
  }
  getUpComing() {
    return this.http.get(this.upComing);
  }
  getVideo(movieId: string) {
    console.log(movieId);
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=ba8775735062389ee9c74144405d38ba');
  }

}