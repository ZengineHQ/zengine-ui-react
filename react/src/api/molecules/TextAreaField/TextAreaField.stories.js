import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export instead of default to get the Storybooks Docs generated properly.
import { TextAreaField } from './TextAreaField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Molecules/TextAreaField',
  component: TextAreaField,
  parameters: {
    jest: ['TextAreaField.test.js'],
  },
};

export const Default = () => <MockForm><TextAreaField label="TextArea Input" name="text" /></MockForm>;

export const Required = () => <MockForm><TextAreaField label="Required TextArea Input" required={true} name="text" /></MockForm>;

export const HelpText = () => <MockForm><TextAreaField label="Text" help="This is some help text" name="text" /></MockForm>;

export const Disabled = () => <MockForm><TextAreaField label="Disabled TextArea Input" disabled={true} name="text" /></MockForm>;

export const Placeholder = () => <MockForm><TextAreaField label="Placeholder TextArea Input" placeholder="placeholder text" name="text" /></MockForm>;

export const DisableResize = () => <MockForm><TextAreaField label="Disabled TextArea Input" resizable={false} name="text" /></MockForm>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <TextAreaField
        name="text"
        label={ text('Label', 'TextArea Label') }
        help={ text('Help Text', 'Follow these instructions wisely') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', false) }
        resizable={ boolean('Resizable', true) }
        placeholder={ text('Placeholder', 'placeholder')}

      />
    </MockForm>
  );
};
