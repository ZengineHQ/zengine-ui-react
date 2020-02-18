import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export instead of default to get the Storybooks Docs generated properly.
import { TextField } from './TextField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Molecules/TextField',
  component: TextField,
  parameters: {
    jest: ['TextField.test.js'],
  },
};

export const Default = () => <MockForm><TextField label="Text Input" name="text" /></MockForm>;

export const Required = () => <MockForm><TextField label="Required Text Input" required={true} name="text" /></MockForm>;

export const Disabled = () => <MockForm><TextField label="Disabled Text Input" disabled={true} name="text" /></MockForm>;

export const HelpText = () => <MockForm><TextField label="Text" help="This is some help text" name="text" /></MockForm>;

export const Placeholder = () => <MockForm><TextField label="Placeholder Text Input" placeholder="placeholder text" name="text" /></MockForm>;

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
        placeholder={ text('Placeholder', 'placeholder')}
      />
    </MockForm>
  );
};
