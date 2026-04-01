import { Injectable } from '@angular/core';
import { GetBook } from './GetBook';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {
  private apiUrl = 'http://localhost:5000/Book';

  constructor(private http: HttpClient) {}
  getBooks(): Observable<GetBook[]> {
    return this.http.get<GetBook[]>(this.apiUrl);
  }
}
