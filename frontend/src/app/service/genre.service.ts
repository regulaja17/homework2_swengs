import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor() { }

  genreNames = {
    t: 'Thriller',
    m: 'Manga'
  };
}



