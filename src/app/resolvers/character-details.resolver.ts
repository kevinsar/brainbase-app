import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CharacterDetails } from '../models/character-detail.model';
import { MarvelService } from '../services/marvel.service';

@Injectable({ providedIn: 'root' })
export class CharacterDetailsResolver implements Resolve<CharacterDetails> {
  constructor(private marvelService: MarvelService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.marvelService
      .getCharacterDetails(route.paramMap.get('id'))
      .pipe(
        map(details => {
          if (details) {
            return details;
          }
        })
      )
      .pipe(
        catchError(error => {
          console.log(error);
          return of(null);
        })
      );
  }
}
