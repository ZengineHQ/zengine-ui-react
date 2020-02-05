import React from 'react';

import { Form, NumberInput, TextInput } from '../api';

const FormsDemo = () => (
  <div>
    <h2>Forms Demo</h2>

    <Form fields={[]} onSubmit={(data) => console.warn('submit', data)}>

      <TextInput label="Name" name="name" required />

      <NumberInput label="Age" name="age" required />
    </Form>
  </div>
);

export default FormsDemo;
