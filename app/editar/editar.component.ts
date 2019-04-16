import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie/serie.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService, private _serieService: SerieService,
    private formBuilder: FormBuilder) { }


  movie = {}
  serie = {}
  editarForm : FormGroup;

  ngOnInit() {
    
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
        })
    });

    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._serieService.getById(id)
        .subscribe(response => {
          this.movie = response;
        })
    });

    this.editarForm = this.formBuilder.group({
      titulo: ['',],
      ano: ['',],
      sinopse: ['',]
    });

    
  }
  teste(){
    // this.editarForm.setValue({titulo: this.movie.title});
    let teste = this.movie;
  }

}
