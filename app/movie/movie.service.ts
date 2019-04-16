import { BaseService } from '../services/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  getDiscover() {
    return this._httpClient.get(`${this.URL}discover/movie?language=pt-BR`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}movie/${id}?language=pt-BR`)
  }
}
