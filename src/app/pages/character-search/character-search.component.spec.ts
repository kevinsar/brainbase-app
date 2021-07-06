import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { Md5 } from 'ts-md5';

import { CharacterSearchComponent } from './character-search.component';

describe('CharacterSearchComponent', () => {
  let component: CharacterSearchComponent;
  let fixture: ComponentFixture<CharacterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [Md5, { provide: Router, useValue: { navigate: () => {} } }],
      declarations: [CharacterSearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getSearchResults', () => {
    it('should set showNoResults to true if there is an api error', () => {
      component.showNoResults = false;
      spyOn(component['marvelService'], 'getCharactersBySearchTerm').and.returnValue(throwError('error'));
      component.getSearchResults('test');
      expect(component.showNoResults).toBeTrue();
    });

    it('should set showNoResults to true if there are no results', () => {
      component.showNoResults = false;
      spyOn(component['marvelService'], 'getCharactersBySearchTerm').and.returnValue(of({ data: { results: [] } }));
      component.getSearchResults('test');
      expect(component.showNoResults).toBeTrue();
    });

    it('should set showNoResults to false if there are results', () => {
      component.showNoResults = false;
      spyOn(component['marvelService'], 'getCharactersBySearchTerm').and.returnValue(of({ data: { results: [{ name: 'Spiderman' }] } }));
      component.getSearchResults('test');
      expect(component.showNoResults).toBeFalse();
      expect(component.searchResults[0].name).toBe('Spiderman');
    });
  });

  describe('goToCharacter', () => {
    it('should call on navigate router', () => {
      spyOn(component['router'], 'navigate');
      component.goToCharacter(123);
      expect(component['router'].navigate).toHaveBeenCalled();
    });
  });
});
