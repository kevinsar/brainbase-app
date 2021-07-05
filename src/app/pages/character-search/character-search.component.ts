import { Component, OnInit } from '@angular/core';
import { CharacterResults } from 'src/app/models/character-result.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  searchTerms: string;
  searchResults: CharacterResults[];

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {}

  getSearchResults() {
    this.marvelService.getCharactersBySearchTerm(this.searchTerms).subscribe((searchResults: { data: { results: CharacterResults[] } }) => {
      this.searchResults = searchResults.data.results;
      console.log(this.searchResults);
    });
  }
}
