import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AccountService } from '../account.service';

@Injectable()
export class BaseService {

  public URL = "https://api.themoviedb.org/3/";
  public URL_LOGIN = "https://r4mitdivdc.execute-api.us-east-1.amazonaws.com/dev";

  // public API_KEY = "583aea9c82cd59697a0aa7b1dc106a21";

  public _httpClient: HttpClient;
  private account: AccountService;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.account.logout();
      location.reload(true);
    }
    return throwError(error);
  }
}
