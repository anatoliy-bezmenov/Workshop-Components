import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getThemes() {
    const api = environment.apiUrl;
    // const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${api}/themes`);
  }

  getPosts(limit?: number) {
    const api = environment.apiUrl;
    let url = `${api}/posts`;

      if (limit) {
        url += `?limit=${limit}`;
      }
      
      return this.http.get<Post[]>(url)
  }
}
