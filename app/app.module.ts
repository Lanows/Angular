import { SerieService } from './serie/serie.service';
import { MovieService } from './movie/movie.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { AccountGuard } from './guards/account.guard';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoginComponent } from './login/login.component';
import { EditarComponent } from './editar/editar.component';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './pessoa/pessoa.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [
    AccountService,
    AccountGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MovieService,
    SerieService,
    PessoaService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
