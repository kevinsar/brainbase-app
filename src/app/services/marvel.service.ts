import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  constructor(private http: HttpClient, private md5: Md5) {}

  getCharactersBySearchTerm(searchTerms: string): Observable<Object> {
    return this.http.get(`${environment.marvelBaseApi}/characters${this.getApiCredentials()}&nameStartsWith=${searchTerms}`);
  }

  getCharacterDetails(characterId: string): Observable<Object> {
    return this.http.get(`${environment.marvelBaseApi}/characters/${characterId}${this.getApiCredentials()}`);
  }

  getApiCredentials(timeStamp = new Date()): string {
    const hash = String(Md5.hashStr(`${timeStamp}${environment.marvelHashKey}${environment.marvelApiKey}`));

    return `?ts=${timeStamp}&apikey=${environment.marvelApiKey}&hash=${hash}`;
  }
}
