module.exports = {
  stories: [
    // Top-level intro story.
    '../src/storybook/welcome.js',
    // Component stories.
    '../src/**/*.stories.js',
    // Template section intro story.
    '../src/storybook/templates/intro.js',
    // Template stories, given a different suffix so we can load them separately.
    '../src/storybook/templates/**/*.js',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-viewport/register'
  ],
};
