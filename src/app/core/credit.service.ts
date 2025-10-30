import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class CreditService {
  private apiUrl = 'https://fya-api-b0g2gmgxefadbday.eastus2-01.azurewebsites.net/api/credit';

  constructor(private http: HttpClient, private auth: AuthService) {}



  register(credit: any) {
    return this.http.post(`${this.apiUrl}/register`, credit);
  }

  getAll() {
    return this.http.get(`${this.apiUrl}/all`);
  }

  search(params: any) {
    return this.http.get(`${this.apiUrl}/search`, { params });
  }
}
