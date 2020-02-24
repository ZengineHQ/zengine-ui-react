import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { Button, PageTitle, SectionHeader } from '../api';
import useSyntaxHighlighter from './useSyntaxHighlighter';

export default {
  title: 'Welcome',
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      disable: true,
    },
  }
};

export const Introduction = () => (
  <article>
    <PageTitle>Introduction</PageTitle>
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
      <dd>A log of actions that occurred, try clicking buttons and otherwise interacting with elements in the stories!
      </dd>

      <dt><strong>Knobs</strong></dt>
      <dd>
        A special panel available for every <strong>Playground</strong> story; these are special stories that
        contain dynamic editable versions of all of the supported configuration properties in a component. Tinker
        with them and watch the component update in real-time!
      </dd>

      <dt><strong>Tests</strong></dt>
      <dd>Displays any relevant test results for the component, best make sure all bases are covered!</dd>
    </dl>

    <SectionHeader>Responsive Preview</SectionHeader>
      In the top toolbar, after the zoom in/out buttons there's a responsive helper button that will redimension the
      Canvas so different screen size scenarios can be previewed.
    <hr/>

    <p>
      Oh, PS - Font Awesome SVG icons work:&nbsp;&nbsp;&nbsp;
      <i className="fas fa-camera"></i>&nbsp;&nbsp;&nbsp;
      <i className="fas fa-exclamation-triangle"></i>&nbsp;&nbsp;&nbsp;
      <i className="fas fa-dog"></i>
    </p>

    <hr/>

    <Button onClick={ linkTo('Atoms/Button') }>Check out the first Atom</Button>
  </article>
);

export const Usage = () => {
  const code1 = `
// Latest stable version.
npm install @zenginehq/yidhra-react

// Development version.
npm install git+ssh://git@github.com/Wizehive/yidhra
`;

  const code2 = `
// Add \`yidhra.css\` from a CDN or locally.
import 'yidhra.css';
<link rel="stylesheet" type="text/css" href="https://awesome-cdn.com/yidhra.css">

// Add Font Awesome icons.
<script src="https://kit.fontawesome.com/0cf0825a47.js" crossorigin="anonymous"></script>
`;

  const code3 = `
// Use components.
import { Button, TextField, NumberField, Form, KPI } from '@zenginehq/yidhra-react';

function MyComponent() {
    const myCallback = values => {
        console.warn('submitted values', values);
    };

    const items = [
      { count: 1358, label: 'Submissions'},
      { count: 158, label: 'Ready for Review'},
      { count: 45, label: 'Reviewed'}
    ];

    return (
        <>
          <KPI items={items}/>

          <Form onSubmit={myCallback}>
              <TextField name="firstName" label="First Name" required />
              <NumberField name="age" label="Age" required />
          </Form>
        </>
    );
}
`;

  return (
    <article>
      <PageTitle>Using Yidhra</PageTitle>
      <p>
        Install the library, add the theme files yourself and profit! Use the menu on the left to navigate between
        the different components available.  Don't forget to check out the Templates section at the end to see some
        examples of what you can build.
      </p>

      <SectionHeader>Installation</SectionHeader>

      { useSyntaxHighlighter(code1) }

      <SectionHeader>Adding Fonts & Theme</SectionHeader>

      { useSyntaxHighlighter(code2) }

      <SectionHeader>Using the components</SectionHeader>

      { useSyntaxHighlighter(code3) }
    </article>
  );
};

export const Development = () => (
  <article>
    <PageTitle>Developing Yidhra</PageTitle>
    <p>There's 3 mandatory parts for every component: code, stories and tests.</p>

    <SectionHeader>Writing Code</SectionHeader>
    <ul>
      <li>Components should be functional and exported from <code>/src/api/index.js</code> if public-facing.</li>
      <li>Components should have a comprehensive docblock with a textual description which will appear in the Storybook
        Docs page.
      </li>
    </ul>

    <SectionHeader>Writing Stories</SectionHeader>
    <ul>
      <li>Stories should have the <code>parameters.jest</code> option to specify which file to pull in test results
        from.
      </li>
      <li>Stories should use <code>action()</code> from <code>@storybook/addon-actions</code> wherever possible to log
        events to the panel
      </li>
      <li>All stories should include:</li>
      <ul>
        <li>A first "Default" story with minimum or no parameters</li>
        <li>If applicable, a "Style Guide" story displaying different configurations side by side</li>
        <li>If applicable, a last "Playground" story using _Knobs_ to customize as many props as possible</li>
        <li>As many different stories as necessary to cover demonstrating key configurations of a component</li>
      </ul>
    </ul>

    <SectionHeader>Writing Tests</SectionHeader>
    <ul>
      <li>Tests are written using <code>@testing-library/react</code> and mocks/spies are provided by <code>jest</code>
      </li>
      <li>Be sure to always wrap your <code>fireEvent()</code> calls with <code>act()</code></li>
      <li>The more the merrier, try to be as exhaustive as possible when writing tests to make sure all bases are
        covered
      </li>
      <li>Use <code>npm run test:cover</code> to check code coverage, let's keep it 100</li>
    </ul>
  </article>
);
