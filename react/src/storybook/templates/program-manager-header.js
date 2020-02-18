import React from 'react';

import { Image, KPI, PageTitle } from '../../api';

export default {
  title: 'Templates/ProgramManager',
  parameters: {
    options: {
      showPanel: false
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

  return (
    <header className="tpl-program-console-header row">
      <div className="col-md-6 col-sm-12 d-flex align-items-center">
        <Image src="Yidhra-face.jpg" alt="Program Console" classes="atom-image-circle" height="88" />
        <PageTitle classes="ml-3">Program Console</PageTitle>
      </div>

      <div className="col-md-6 col-sm-12">
        <KPI items={items} />
      </div>
    </header>
  );
};
