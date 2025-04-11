// sentiment.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private apiUrl = 'http://localhost:8000/api/analyze/';

  constructor(private http: HttpClient) { }

  analyzeText(text: string) {
    return this.http.post(this.apiUrl, { text });
  }
}