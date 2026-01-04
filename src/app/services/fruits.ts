import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config';

export type AddFruitResponse = { fruits: string[] };

@Injectable({ providedIn: 'root' })
export class FruitsService {
  constructor(private http: HttpClient) {}

  private url(path: string) {
    const base = API_BASE_URL.replace(/\/+$|^\s+|\s+$/g, '');
    return `${base}${path}`;
  }

  // GET /api/health -> "API is healthy"
  health(): Observable<string> {
    return this.http.get(this.url('/api/health'), { responseType: 'text' });
  }

  // GET /api/fruits -> string[]
  getFruits(): Observable<string[]> {
    return this.http.get<string[]>(this.url('/api/fruits'));
  }

  // POST /api/fruits { fruit } -> { fruits: [...] }
  addFruit(fruit: string): Observable<AddFruitResponse> {
    return this.http.post<AddFruitResponse>(this.url('/api/fruits'), { fruit });
  }

  // PUT /api/fruits { fruits } -> string[]
  replaceFruits(fruits: string[]): Observable<string[]> {
    return this.http.put<string[]>(this.url('/api/fruits'), { fruits });
  }
}
