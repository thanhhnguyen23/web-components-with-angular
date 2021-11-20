import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.get().subscribe(
      data => {
        // console.log(data);
        this.articles.push(data);
        // console.log(this.articles[0]['articles'])
      }
    );
  }

}
