import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, HTTP_OPTIONS } from '../appConfig';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public sendPhoneNumber(phoneNumber) {
    return this.http.post(
      BASE_URL + 'api/v1/user/get_otp/',
      { phone: phoneNumber },
      HTTP_OPTIONS
    );
  }

  public verifyOtp(data) {
    return this.http.post(
      BASE_URL + 'api/v1/user/get_access_token/',
      data,
      HTTP_OPTIONS
    );
  }
}
