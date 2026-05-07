import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovies } from '../../models/Imovie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
    @Input()
  movie!: Imovies;


  @Output()
  emitMovie: EventEmitter<Imovies> =
  new EventEmitter<Imovies>();



  onMovieClick(){

    this.emitMovie.emit(this.movie);

  }

}
