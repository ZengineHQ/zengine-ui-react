import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import logo from '../public/logo.svg';

const theme = create({
  base: 'light',
  brandTitle: 'WizeHive Yidhra',
  brandImage: logo,
});

addons.setConfig({
  theme,
});
