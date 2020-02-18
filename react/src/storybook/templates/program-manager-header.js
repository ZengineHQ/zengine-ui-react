import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { Image, KPI, PageTitle } from '../../api';
import useSyntaxHighlighter from '../useSyntaxHighlighter';

export default {
  title: 'Templates/ProgramManager',
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      disable: true,
    }
  }
};

export const Header = () => {
  const items = [
    {
      count: 1358,
      label: 'Submissions',
    },
    {
      count: 158,
      label: 'Ready for Review',
    },
    {
      count: 45,
      label: 'Reviewed',
    },
  ];

  const story = `
    <header className="tpl-program-console-header row">
      <div className="col-md-6 col-sm-12 d-flex align-items-center">
        <Image src="Yidhra-face.jpg" alt="Program Console" classes="atom-image-circle" height="88" />
        <PageTitle classes="ml-3">Program Console</PageTitle>
      </div>

      <div className="col-md-6 col-sm-12">
        <KPI items={items} />
      </div>
    </header>
  `;

  // @TODO we need a better way of displaying the source code, lets figure out why Docs addon isn't working.
  return (
    <>
      <header className="tpl-program-console-header row">
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <Image src="Yidhra-face.jpg" alt="Program Console" classes="atom-image-circle" height="88"/>
          <PageTitle classes="ml-3">Program Console</PageTitle>
        </div>

        <div className="col-md-6 col-sm-12">
          <KPI items={ items }/>
        </div>
      </header>

      <hr className="mt-5 mb-3"/>

      <p>
        This template utilizes the following components:

        <ul>
          <li><a href="javascript:" onClick={linkTo('Atoms/Image')}>Image</a></li>
          <li><a href="javascript:" onClick={linkTo('Atoms/PageTitle')}>PageTitle</a></li>
          <li><a href="javascript:" onClick={linkTo('Organisms/KPI')}>KPI</a></li>
        </ul>
      </p>

      { useSyntaxHighlighter(story) }
    </>
  );
};
