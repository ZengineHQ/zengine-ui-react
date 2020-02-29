import React from 'react';

import { PageTitle } from '../../api';

export default {
  title: 'Templates',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const Intro = () => (
  <article>
    <PageTitle>Template Browser</PageTitle>
    <p>
      Use the nested menu on the left to navigate between different Atom Design Templates built using these components.
    </p>
  </article>
);
