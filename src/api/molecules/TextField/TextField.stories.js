import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export in order to get Storybook Docs working but actually use the default export when writing the stories.
import { TextField as DocComponent, default as TextField } from './TextField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';
import { isEmail } from '../../util/validation';

export default {
  title: 'Molecules/TextField',
  component: DocComponent,
  parameters: {
    jest: ['TextField.test.js'],
  },
};

export const Default = () => <MockForm><TextField label="Text Input" name="text"/></MockForm>;

export const Required = () => (
  <MockForm><TextField label="Required Text Input" required={ true } name="text"/></MockForm>
);

export const Disabled = () => (
  <MockForm><TextField label="Disabled Text Input" disabled={ true } name="text"/></MockForm>
);

export const HelpText = () => (
  <MockForm><TextField label="Text" help="This is some help text" name="text"/></MockForm>
);

export const PrefixAndSuffix = () => (
  <MockForm>
    <TextField
      label="Something that has a prefix and suffix"
      placeholder="Cant think of anything"
      name="foo"
      help="Bla bla"
      prefix="prefix"
      suffix="suffix"
    />
  </MockForm>
);

export const CustomValidation = () => {
  const validate = value => {
    if (!isEmail(value)) {
      return 'Invalid email address';
    }
  };
  return (
    <MockForm><TextField label="Email" help="Enter your email address" name="text" validate={ validate }/></MockForm>
  );
};

export const Placeholder = () => <MockForm>(
  <TextField label="Placeholder Text Input" placeholder="placeholder text" name="text"/></MockForm>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <TextField
        name="text"
        label={ text('Label', 'Input Label') }
        help={ text('Help Text', 'Follow these instructions wisely') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', false) }
        placeholder={ text('Placeholder', 'placeholder') }
      />
    </MockForm>
  );
};
