import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CharacterSearchComponent } from './pages/character-search/character-search.component';
import { CharacterDetailsResolver } from './resolvers/character-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: CharacterSearchComponent
  },
  {
    path: 'details/:id',
    component: CharacterDetailsComponent,
    resolve: {
      characterData: CharacterDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
