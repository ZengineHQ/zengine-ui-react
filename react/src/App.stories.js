import React from 'react';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Welcome',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const Usage = () => (
  <article>
    <h1 className="atom-page-title">Usage</h1>
    <p>
      Use the nested menu below to navigate between different all of the available Yidhra components, grouped by
      their atomic design categorization.
    </p>

    <h2>Canvas & Docs</h2>
    <p>
      Switch between <strong>Canvas</strong> and <strong>Docs</strong> view using the tabs at the top of the page.
      The <em>Canvas</em> contains a live example of the component and info panels at the bottom of the screen whereas
      the <em>Docs</em> page provides comprehensive documentation of every configuration prop accepted by the component
      as well as display the source code for each story.
    </p>

    <h2>Info Panels</h2>
    <p>
      In Canvas mode you also have access to a couple different info panels at the bottom:
    </p>
    <dl>
      <dt><strong>Actions</strong></dt>
      <dd>A log of actions that occurred, try clicking buttons that appear in stories.</dd>

      <dt><strong>Knobs</strong></dt>
      <dd>
        A special panel available for every <strong>Playground</strong> story; these are special stories that
        contain dynamic editable versions of all of the supported configuration properties in a component. Tinker
        with them and watch the component update in real-time!
      </dd>

      <dt><strong>Tests</strong></dt>
      <dd>Displays any relevant test results for the component.</dd>
    </dl>

    <button onClick={linkTo('Atoms/Button')}>Go to "Button"</button>
  </article>
);

export const Development = () => (
  <article>
    <h1 className="atom-page-title">Developing Yidhra</h1>
    <p>There's 3 mandatory parts for every component: code, stories and tests.</p>

    <h2>Writing Code</h2>
    <p>Components should be functional and exported in `/src/api/index.js` if public-facing.</p>
    <p>Components should have a comprehensive docblock with a textual description which will appear in the Storybook Docs page.</p>

    <h2>Writing Stories</h2>
    <p>Stories should have the "parameters.jest" option to specify which file to pull in test results from.</p>
    <p>Stories should use `action()` from `@storybook/addon-actions` wherever possible to log events to the panel</p>
    <p>All stories should include:</p>
    <ul>
      <li>A first "Default" story with minimum parameters</li>
      <li>A last "Playground" story using _Knobs_ to customize as many props as possible</li>
      <li>As many different stories as necessary to cover demonstrating all configurations of a component</li>
    </ul>

    <h2>Writing Tests</h2>
    <p>Tests are written using `@testing-library/react` and mocks/spies are provided by `jest`.</p>
    <p>Be sure to always wrap your `fireEvent()` calls with `act()`</p>
    <p>The more the merrier, try to be as exhaustive as possible when writing tests to make sure all bases are covered.</p>
  </article>
);
