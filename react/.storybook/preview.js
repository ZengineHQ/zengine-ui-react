import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';

import results from '../src/.test-results.json';

addDecorator(withKnobs);
addDecorator(withTests({ results }));
addParameters({ options: { showPanel: true }});
