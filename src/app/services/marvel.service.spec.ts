import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Md5 } from 'ts-md5';

import { MarvelService } from './marvel.service';

describe('MarvelService', () => {
  let service: MarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Md5]
    });
    service = TestBed.inject(MarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCharactersBySearchTerm', () => {
    it('should return http get observable', () => {
      spyOn(service['http'], 'get');
      service.getCharactersBySearchTerm('123');
      expect(service['http'].get).toHaveBeenCalled();
    });
  });

  describe('getCharacterDetails', () => {
    it('should return http get observable', () => {
      spyOn(service['http'], 'get');
      service.getCharacterDetails('123');
      expect(service['http'].get).toHaveBeenCalled();
    });
  });

  describe('getApiCredentials', () => {
    it('should return correct api hash', () => {
      expect(service.getApiCredentials(123 as any)).toBe('?ts=123&apikey=79352b978941fb16735e9a583189e3b2&hash=d5312f2aa9a4728ebb6ef0d42ae84264');
      expect(service.getApiCredentials()).toBeTruthy();
    });
  });
});
