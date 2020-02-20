import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';

// Omit console addon for now as it pollutes the actions panel.
// import '@storybook/addon-console';
// import { withConsole } from '@storybook/addon-console';
// addDecorator((storyFn, context) => withConsole()(storyFn)(context));

import results from '../src/.test-results.json';

addDecorator(withKnobs);
addDecorator(withTests({ results }));
addParameters({ options: { showPanel: true }});
