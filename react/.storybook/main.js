module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-storysource',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
    '@storybook/addon-jest/register'
  ],
};
