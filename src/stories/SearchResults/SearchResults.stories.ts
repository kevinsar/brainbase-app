import { moduleMetadata, storiesOf } from '@storybook/angular';
import * as SearchResultsNotes from './SearchResultsNotes.md';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';

import { SearchComponent } from 'src/app/components/search/search.component';
import { MaterialModule } from 'src/app/material.module';
import { SearchResultsComponent } from 'src/app/components/search-results/search-results.component';

const knobSearchResults = [
  {
    name: 'She-Hulk (HAS)',
    id: 1017111,
    comics: {
      available: 0
    },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/523214b8ea2cf',
      extension: 'jpg'
    }
  },
  {
    name: 'She-Hulk (Jennifer Walters)',
    id: 1009583,
    comics: {
      available: 455
    },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/20/527bb5d64599e',
      extension: 'jpg'
    }
  },
  {
    name: 'She-Hulk (Lyra)',
    id: 1011392,
    comics: {
      available: 24
    },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/03/527413f4341f7',
      extension: 'jpg'
    }
  },
  {
    name: 'She-Hulk (Marvel War of Heroes)',
    id: 1017331,
    comics: {
      available: 0
    },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/20/5239bfa2c54fa',
      extension: 'jpg'
    }
  },
  {
    name: 'She-Hulk (Ultimate)',
    id: 1011393,
    comics: {
      available: 2
    },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/60/531771492e3ae',
      extension: 'jpg'
    }
  },
  {
    name: 'Shen',
    id: 1015035,
    comics: {
      available: 0
    },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4cdd81a5743a4',
      extension: 'jpg'
    }
  },
  {
    name: 'Sheva Callister',
    id: 1011168,
    comics: {
      available: 0
    },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg'
    }
  }
];

storiesOf('Base Components|Search Results', module)
  .addDecorator(moduleMetadata({ declarations: [SearchResultsComponent], imports: [] }))
  .add(
    'Default',
    () => ({
      moduleMetadata: {
        imports: [MaterialModule]
      },
      template: `
        <div style="width: 95%; margin: 15px auto;">
          <app-search-results [searchResults]="searchResults" (clicked)="clickHandler($event)"></app-search-results>
        </div>
      `,
      props: {
        searchResults: object('searchResults', knobSearchResults),
        clickHandler: action('Search result item has been clicked!')
      }
    }),
    { notes: SearchResultsNotes }
  );
