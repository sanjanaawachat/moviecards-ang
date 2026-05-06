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

   @Input() movie!: Imovies;   // receive data

  @Output() emitMovie = new EventEmitter<Imovies>(); // send data

  onSelectMovie() {
    this.emitMovie.emit(this.movie);
  }

}
