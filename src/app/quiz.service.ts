import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    console.log(this.http);
    console.log(url);
    return this.http.get("http://localhost:3000/questions?questionSubject="+url);
  }

  getAll() {
    return [
      { id: 'javascript', name: 'JavaScript' },
      { id: 'AspNetQuiz', name: 'Asp.Net' },
      { id: 'csharp', name: 'C Sharp' },
      { id: 'designPatterns', name: 'Design Patterns' }
    ];
  }

}