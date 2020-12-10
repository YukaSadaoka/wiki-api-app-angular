import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

// interface Car{
//   year: number;
//   color: string;
//   running: boolean;
// }

// // example of using TypeScript with Rxjs
// // How to know what type will be emitted by the observable? it's better to know 
// // User Generics
// const observable = new Observable<Car>(observer => {
//   observer.next({
//     year: 2000,
//     color: 'red',
//     running: true
//   });
// }).pipe(
//   pluck('color')
// );

// observable.subscribe(value =>{
//     console.log(value);
// })

interface WikipediaResponse {
  query:{
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {  }

  public search(term: string){
    // this.http.get returns observable
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php',{
      params:{
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe( pluck('query', 'search'));
  }

}
