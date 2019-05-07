import { BaseService } from '../services/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  getTrending() {
    return this._httpClient.get(`${this.URL}/movie/`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}movie/findbyid?id=${id}`)
  }

  getSixTrending() {
    return this._httpClient.get(`${this.URL}/movie/6trending`);
  }

  // getTrendingPage(page: number) {
  //   return this._httpClient.get(`${this.URL}/movie/?size=5&page=${page}`)
  // }
}
