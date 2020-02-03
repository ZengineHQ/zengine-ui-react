import React from 'react';

import Button from './atoms/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>
        Wizehive V2 Style Guide
      </h1>

      <section className="guide">
        <header>
          <h2>Buttons</h2>
        </header>

        <table className="guide">
          <thead>
          <tr>
            <td></td>
            <th>Default</th>
            <th>Hover</th>
            <th>Focus</th>
            <th>Active</th>
            <th>Disabled</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Default
            </td>
            <td>
              <Button>Button 1</Button>
            </td>
            <td>
              <Button class="hover">Button 1</Button>
            </td>
            <td>
              <Button class="focus">Button 1</Button>
            </td>
            <td>
              <Button class="active">Button 1</Button>
            </td>
            <td>
              <Button disabled>Button 1</Button>
            </td>
          </tr>
          <tr>
            <td>
              Primary
            </td>
            <td>
              <Button theme="primary">Button 1</Button>
            </td>
            <td>
              <Button class="hover" theme="primary">Button 1</Button>
            </td>
            <td>
              <Button class="focus" theme="primary">Button 1</Button>
            </td>
            <td>
              <Button class="active" theme="primary">Button 1</Button>
            </td>
            <td>
              <Button disabled theme="primary">Button 1</Button>
            </td>
          </tr>
          <tr>
            <td>
              Subdued
            </td>
            <td>
              <Button theme="subdued">Button 1</Button>
            </td>
            <td>
              <Button class="hover" theme="subdued">Button 1</Button>
            </td>
            <td>
              <Button class="focus" theme="subdued">Button 1</Button>
            </td>
            <td>
              <Button class="active" theme="subdued">Button 1</Button>
            </td>
            <td>
              <Button disabled theme="subdued">Button 1</Button>
            </td>
          </tr>
          </tbody>
        </table>

      </section>
    </div>
  );
}

export default App;
