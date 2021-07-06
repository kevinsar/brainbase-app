import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchTerms: string;

  constructor() {}

  ngOnInit(): void {}

  submitHandler(): void {
    this.search.emit(this.searchTerms);
  }
}
