import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../appConfig';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(page, query) {
    let accessToken = sessionStorage.getItem('token');
    return this.http.get(
      BASE_URL + `api/v1/fish/?page=${page}&search=${query}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken
        }
      }
    );
  }
}
