import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { CharacterDetailsComponent } from './character-details.component';

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: { data: of({ characterData: { data: { results: [] } } }) } },
        { provide: Router, useValue: { navigate: () => {} } }
      ],
      declarations: [CharacterDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('goToSearch', () => {
    it('should call on navigate router', () => {
      spyOn(component['router'], 'navigate');
      component.goToSearch();
      expect(component['router'].navigate).toHaveBeenCalled();
    });
  });
});
