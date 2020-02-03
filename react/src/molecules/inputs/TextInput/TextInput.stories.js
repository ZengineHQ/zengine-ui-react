import React from 'react';

import TextInput from './TextInput';

export default {
  title: 'Molecules/Inputs/TextInput',
  component: TextInput,
};

export const Default = () => <TextInput label="Text Input"></TextInput>;

export const Required = () => <TextInput label="Required Text Input" required={true}></TextInput>;
