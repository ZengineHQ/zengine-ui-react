import React from 'react';

import { Form, NumberInput, TextInput } from '../api';
import QuickSearch from '../api/organisms/QuickSearch/QuickSearch';

const FormsDemo = () => (
  <div>
    <h1>Forms Demo</h1>

    <h2>Manually</h2>
    <Form onSubmit={data => console.warn('submit', data)}>

      <TextInput label="Name" name="name" required />

      <NumberInput label="Age" name="age" required />
    </Form>

    <br /><br />
    <h2>Using QuickSearch Organism</h2>
    <QuickSearch onSubmit={ data => console.warn('submit', data)} />
  </div>
);

export default FormsDemo;
