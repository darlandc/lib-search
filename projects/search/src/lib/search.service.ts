import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  USER = 'darlandc';
  API_URL = `https://api.github.com/users/${this.USER}/repos`;

  constructor(private http: HttpClient) { }

  doSearch(terms) {
    console.log(terms);
    return this.http.get(`${this.API_URL}`);
  }
}
