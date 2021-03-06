import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';

try {
  const results = require('../src/test/.results.json');
  addDecorator(withTests({ results }));
} catch (e) {
  // It's all good, just don't display test results.
}

addDecorator(withKnobs);
addParameters({
  options: { showPanel: true },
  viewMode: 'story',
});
