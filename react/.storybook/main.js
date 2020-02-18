module.exports = {
  stories: [
    '../src/storybook/welcome.(js|mdx)',
    '../src/**/*.stories.js',
    '../src/storybook/templates/intro.(js|mdx)',
    '../src/storybook/templates/*.(js|mdx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
    '@storybook/addon-jest/register',
    '@storybook/addon-viewport/register',
  ],
};
