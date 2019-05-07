import { PessoaService } from './../pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie/movie.service';
import { SerieService } from '../serie/serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _pessoaService: PessoaService, private _serieService: SerieService, private _movieService: MovieService, private _router: Router) { }

  movies: any = [];
  series:any = [];
  pessoas: any= [];
  
  ngOnInit() {
    this._movieService.getSixTrending().subscribe(
      response => {
        this.movies = response;
      }
    )

    this._serieService.getSixTrending().subscribe(
      response => {
        this.series = response;
      }
    )
 
    this._pessoaService.getSixTrending().subscribe(
      response => {
        this.pessoas = response;
      }
    )
  }
  goEditMovie(movie) {

    this._router.navigate(['filmes/detalhes', movie.id])
  }

  goEditSerie(serie) {
    this._router.navigate(['series/detalhes', serie.id])
  }

  goEditPessoa(pessoa) {
    this._router.navigate(['pessoas/detalhes', pessoa.id])
  }
}
