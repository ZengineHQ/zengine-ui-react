import React from 'react';

import { Form, NumberInput, TextInput } from '../api';
import SimpleSearch from '../api/organisms/forms/SimpleSearch/SimpleSearch';

const FormsDemo = () => (
  <div style={{color: 'white'}}>
    <h1 style={{color: 'white'}}>Forms Demo</h1>

    <h2 style={{color: 'white'}}>Manually</h2>
    <Form onSubmit={data => console.warn('submit', data)}>

      <TextInput label="Name" name="name" required />

      <NumberInput label="Age" name="age" required />
    </Form>

    <br /><br />
    <h2 style={{color: 'white'}}>Using SimpleSearch Organism</h2>
    <SimpleSearch onSubmit={data => console.warn('submit', data)} />
  </div>
);

export default FormsDemo;
