import { Component, Input } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService){ }
  wikiResponse = [];

  onTerm(term: string){
    this.wikipedia.search(term).subscribe((pages) =>{
      //instead of pages.query.search 
      this.wikiResponse = pages;
     
    });
  }
}
