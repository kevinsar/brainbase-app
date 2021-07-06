import { moduleMetadata, storiesOf } from '@storybook/angular';
import * as SearchNotes from './SearchNotes.md';
import { action } from '@storybook/addon-actions';

import { SearchComponent } from 'src/app/components/search/search.component';
import { MaterialModule } from 'src/app/material.module';

const knobMessages = ['Use Knobs tab to see how this works!', 'This is a banner'];

storiesOf('Base Components|Search Bar', module)
  .addDecorator(moduleMetadata({ declarations: [SearchComponent], imports: [] }))
  .add(
    'Default',
    () => ({
      moduleMetadata: {
        imports: [MaterialModule]
      },
      template: `
        <div style="width: 95%; margin: 15px auto;">
          <app-search (search)="search($event)"></app-search>
        </div>
      `,
      props: {
        search: action('Search has been submitted!')
      }
    }),
    { notes: SearchNotes }
  );
