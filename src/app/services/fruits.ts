import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export type AddFruitResponse = { fruits: string[] };

@Injectable({ providedIn: 'root' })
export class FruitsService {
  constructor(private http: HttpClient) {}

  private url(path: string) {
    const base = (environment.apiBaseUrl ?? '').replace(/\/+$/g, '');
    return base ? `${base}${path}` : path; // prod uses full URL, dev uses /api/...
  }

  health(): Observable<string> {
    return this.http.get(this.url('/api/health'), { responseType: 'text' });
  }

  getFruits(): Observable<string[]> {
    return this.http.get<string[]>(this.url('/api/fruits'));
  }

  addFruit(fruit: string): Observable<AddFruitResponse> {
    return this.http.post<AddFruitResponse>(this.url('/api/fruits'), { fruit });
  }

  replaceFruits(fruits: string[]): Observable<string[]> {
    return this.http.put<string[]>(this.url('/api/fruits'), { fruits });
  }
}
