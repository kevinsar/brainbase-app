import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDetails } from 'src/app/models/character-detail.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: CharacterDetails;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(data => {
      this.character = data.characterData?.data.results[0];
    });
  }

  ngOnInit(): void {}

  goToSearch(): void {
    this.router.navigate(['']);
  }
}
