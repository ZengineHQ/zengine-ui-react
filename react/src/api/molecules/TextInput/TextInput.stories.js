import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export instead of default to get the Storybooks Docs generated properly.
import { TextInput } from './TextInput';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../util/useDefaultPanel';

export default {
  title: 'Molecules/TextInput',
  component: TextInput,
  parameters: {
    jest: ['TextInput.test.js'],
  },
};

export const Default = () => <MockForm><TextInput label="Text Input" name="text" /></MockForm>;

export const Required = () => <MockForm><TextInput label="Required Text Input" required={true} name="text" /></MockForm>;

export const HelpText = () => <MockForm><TextInput label="Disabled Text Input" disabled={true} name="text" /></MockForm>;

export const Disabled = () => <MockForm><TextInput label="Text" help="This is some help text" name="text" /></MockForm>;

export const Placeholder = () => <MockForm><TextInput label="Placeholder Text Input" placeholder="placeholder text" name="text" /></MockForm>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <TextInput
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
