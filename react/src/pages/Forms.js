import React from 'react';

import { Form, NumberInput, TextInput } from '../api';
import SimpleSearch from '../api/organisms/forms/SimpleSearch/SimpleSearch';

const FormsDemo = () => (
  <div>
    <h1>Forms Demo</h1>

    <h2>Manually</h2>
    <Form onSubmit={data => console.warn('submit', data)}>

      <TextInput label="Name" name="name" required />

      <NumberInput label="Age" name="age" required />
    </Form>

    <h2>Using SimpleSearch Organism</h2>
    <SimpleSearch onSubmit={data => console.warn('submit', data)} />
  </div>
);

export default FormsDemo;
