import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  
  term = '';

  constructor() { }

  ngOnInit() {}

  onFormSubmit(e: any)
  {
    e.preventDefault();
    this.submitted.emit(this.term);
  }
}
