import { EditarComponent } from './editar/editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountGuard } from './guards/account.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'filmes', loadChildren: './movie/movie.module#MovieModule', canActivate: [AccountGuard] },
  { path: 'series', loadChildren: './serie/serie.module#SerieModule', canActivate: [AccountGuard] },
  { path: ':type/detalhes/:id/editar', component: EditarComponent},
  { path: '', pathMatch: 'full', redirectTo: 'filmes', canActivate: [AccountGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'filmes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
