import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  apiKey: string = 'd9c30eff1df14775b1caa4208f6a7a58';
  // https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d9c30eff1df14775b1caa4208f6a7a58


  // newsapi
  // https://newsapi.org/v2/everything?q=tesla&from=2021-10-20&sortBy=publishedAt&apiKey=d9c30eff1df14775b1caa4208f6a7a58

  get(){
    // return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
    // newsapi
    return this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-10-20&sortBy=publishedAt&apiKey=${this.apiKey}`);
  }

}
