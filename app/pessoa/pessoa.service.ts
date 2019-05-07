import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base/base.service';

@Injectable()
export class PessoaService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getTrending() {
    return this._httpClient.get(`${this.URL}/person/`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}person/findbyid?id=${id}`)
  }

  getSixTrending() {
    return this._httpClient.get(`${this.URL}/person/6trending`);
  }
}
