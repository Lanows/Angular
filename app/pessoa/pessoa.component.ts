import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private _pessoaService: PessoaService, private _router: Router) { }

  pessoas = [];

  ngOnInit() {
    this._pessoaService.getTrending().subscribe(
      response => {
        this.pessoas = response['content'];
      }
    )
  }

  goEdit(pessoa) {
    this._router.navigate(['pessoas/detalhes', pessoa.id])
  }

}
