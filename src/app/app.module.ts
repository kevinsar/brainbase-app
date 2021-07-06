import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { CharacterSearchComponent } from './pages/character-search/character-search.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, CharacterSearchComponent, CharacterDetailsComponent, SearchResultsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MaterialModule],
  providers: [Md5],
  bootstrap: [AppComponent]
})
export class AppModule {}
