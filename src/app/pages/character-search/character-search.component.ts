import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterResults } from 'src/app/models/character-result.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  searchResults: CharacterResults[];
  showNoResults = false;
  showSpinner = false;

  constructor(private marvelService: MarvelService, private router: Router) {}

  ngOnInit(): void {}

  getSearchResults(searchTerms) {
    this.showNoResults = false;
    this.showSpinner = true;

    this.marvelService.getCharactersBySearchTerm(searchTerms).subscribe(
      (searchResults: { data: { results: CharacterResults[] } }) => {
        this.searchResults = searchResults.data.results;
        this.showNoResults = this.searchResults.length === 0;
        this.showSpinner = false;
      },
      error => {
        this.showNoResults = true;
        this.showSpinner = false;
      }
    );
  }

  goToCharacter(characterId: number) {
    this.router.navigate([`details/${characterId}`]);
  }
}
