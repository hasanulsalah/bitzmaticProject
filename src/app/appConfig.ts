import { HttpHeaders } from '@angular/common/http';

export const BASE_URL = "http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/";
export const HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };