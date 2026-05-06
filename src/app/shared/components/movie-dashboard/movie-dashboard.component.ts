import { Component, OnInit } from '@angular/core';
import { Imovies } from '../../models/Imovie';
import { movieArray } from '../../consts/movies';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 movies: Imovies[] = movieArray;

  getMsgFromChild(movie: Imovies) {
    console.log('Movie from child:', movie);
    alert(movie.title || movie.original_title);
  }
}
