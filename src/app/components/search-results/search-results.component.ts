import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CharacterResults } from 'src/app/models/character-result.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: CharacterResults[];
  @Output() clicked = new EventEmitter<number>();

  displayedColumns: string[] = ['name', 'image', 'description', 'appearances'];

  constructor() {}

  ngOnInit(): void {}

  clickHandler(characterId: number) {
    this.clicked.emit(characterId);
  }
}
