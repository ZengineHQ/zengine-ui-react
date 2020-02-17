import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { Button, PageTitle, SectionHeader } from '../api';

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
    <PageTitle>Usage</PageTitle>
    <p>
      Use the nested menu on the left to navigate between all of the available Yidhra components, grouped by
      their atomic design categorization, as well as some additional Utility components you may find useful.
    </p>

    <SectionHeader>Canvas & Docs</SectionHeader>
    <p>
      Switch between <strong>Canvas</strong> and <strong>Docs</strong> view using the tabs at the top of the page.
      The <em>Canvas</em> contains a live example of the component and info panels at the bottom of the screen whereas
      the <em>Docs</em> page provides comprehensive documentation of every configuration prop accepted by the component
      as well as display the source code for each story.
    </p>

    <SectionHeader>Info Panels</SectionHeader>
    <p>
      In Canvas mode you also have access to a couple different info panels along the bottom of the screen:
    </p>
    <dl>
      <dt><strong>Actions</strong></dt>
      <dd>A log of actions that occurred, try clicking buttons and otherwise interacting with elements in the stories!</dd>

      <dt><strong>Knobs</strong></dt>
      <dd>
        A special panel available for every <strong>Playground</strong> story; these are special stories that
        contain dynamic editable versions of all of the supported configuration properties in a component. Tinker
        with them and watch the component update in real-time!
      </dd>

      <dt><strong>Tests</strong></dt>
      <dd>Displays any relevant test results for the component, best make sure all bases are covered!</dd>
    </dl>

    <hr/>

    <p>
      Oh PS Font Awesome SVG icons work:&nbsp;&nbsp;&nbsp;
      <i className="fas fa-camera"></i>&nbsp;&nbsp;&nbsp;
      <i className="fas fa-exclamation-triangle"></i>&nbsp;&nbsp;&nbsp;
      <i className="fas fa-dog"></i>
    </p>

    <hr/>

    <Button onClick={linkTo('Atoms/Button')}>Check out the first Atom</Button>
  </article>
);

export const Development = () => (
  <article>
    <PageTitle>Developing Yidhra</PageTitle>
    <p>There's 3 mandatory parts for every component: code, stories and tests.</p>

    <SectionHeader>Writing Code</SectionHeader>
    <ul>
      <li>Components should be functional and exported in <code>/src/api/index.js</code> if public-facing.</li>
      <li>Components should have a comprehensive docblock with a textual description which will appear in the Storybook Docs page.</li>
    </ul>

    <SectionHeader>Writing Stories</SectionHeader>
    <ul>
      <li>Stories should have the <code>parameters.jest</code> option to specify which file to pull in test results from.</li>
      <li>Stories should use <code>action()</code> from <code>@storybook/addon-actions</code> wherever possible to log events to the panel</li>
      <li>All stories should include:</li>
      <ul>
        <li>A first "Default" story with minimum or no parameters</li>
        <li>A last "Playground" story using _Knobs_ to customize as many props as possible</li>
        <li>As many different stories as necessary to cover demonstrating all configurations of a component</li>
      </ul>
    </ul>

    <SectionHeader>Writing Tests</SectionHeader>
    <ul>
      <li>Tests are written using <code>@testing-library/react</code> and mocks/spies are provided by <code>jest</code>.</li>
      <li>Be sure to always wrap your <code>fireEvent()</code> calls with <code>act()</code></li>
      <li>The more the merrier, try to be as exhaustive as possible when writing tests to make sure all bases are covered.</li>
    </ul>
  </article>
);
