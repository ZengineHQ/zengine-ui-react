import React from 'react';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'to Storybook',
};

export const Usage = () => {
  const style = {
    padding: '15px',
    lineHeight: '1.4',
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(0, 0, 0)',
  };

  return (
    <article style={style}>
      <h1>Usage</h1>
      <p>
        Use the nested menu below to navigate between different all of the available Yidhra components, grouped by
        their atomic design categorization.
      </p>
      <p>
        Switch between <strong>Canvas</strong> and <strong>Docs</strong> view using the tabs at the top of the page;
        the <em>canvas</em> contains a live example and the <em>docs</em> breaks down property configurations and code.
      </p>
      <p>
        In Canvas mode you also have access to a couple different info panels:
        <dl>
          <dt>Actions</dt>
          <dd>A log of actions that occurred, try clicking buttons that appear in stories.</dd>

          <dt>Story</dt>
          <dd>The full story source code, for curious folks.</dd>

          <dt>Notes</dt>
          <dd>Read any additional notes that might be included with a story.</dd>

          <dt>Knobs</dt>
          <dd>
            A special panel available for every <strong>Playground</strong> story; these are special stories that
            contain dynamic editable versions of all of the supported configuration properties in a component. Tinker
            with them and watch the component update in real-time!
          </dd>
        </dl>
      </p>
    </article>
  );
};
