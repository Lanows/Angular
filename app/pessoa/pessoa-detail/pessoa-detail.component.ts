import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _pessoaService: PessoaService) { }

  pessoa = {}
  
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._pessoaService.getById(id)
        .subscribe(response => {
          this.pessoa = response;
        })
    });
  }
}