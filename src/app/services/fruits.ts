import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type AddFruitResponse = { fruits: string[] };

@Injectable({ providedIn: 'root' })
export class FruitsService {
  constructor(private http: HttpClient) {}

  // GET /api/health -> "API is healthy"
  health(): Observable<string> {
    return this.http.get('/api/health', { responseType: 'text' });
  }

  // GET /api/fruits -> string[]
  getFruits(): Observable<string[]> {
    return this.http.get<string[]>('/api/fruits');
  }

  // POST /api/fruits { fruit } -> { fruits: [...] }
  addFruit(fruit: string): Observable<AddFruitResponse> {
    return this.http.post<AddFruitResponse>('/api/fruits', { fruit });
  }

  // PUT /api/fruits { fruits } -> string[]
  replaceFruits(fruits: string[]): Observable<string[]> {
    return this.http.put<string[]>('/api/fruits', { fruits });
  }
}
