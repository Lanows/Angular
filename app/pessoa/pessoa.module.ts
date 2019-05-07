import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaRoutingModule } from './pessoa.routing.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoaService } from './pessoa.service';

@NgModule({
  declarations: [
    PessoaComponent,
    PessoaDetailComponent,
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ],
  providers: [
    PessoaService
  ],
  exports: []
})
export class PessoaModule { }
