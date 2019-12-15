import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-movie-button',
  templateUrl: './movie-button.component.html',
  styleUrls: ['./movie-button.component.scss'],
})
export class MovieButtonComponent {
  @Input('video') movie: any;
  constructor() { }

}
