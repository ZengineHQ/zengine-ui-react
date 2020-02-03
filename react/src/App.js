import React from 'react';

// @TODO figure out how we're going to add styles in locally
import './assets/css/style-guide.css';

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
              <button>Button 1</button>
            </td>
            <td>
              <button className="hover">Button 1</button>
            </td>
            <td>
              <button className="focus">Button 1</button>
            </td>
            <td>
              <button className="active">Button 1</button>
            </td>
            <td>
              <button disabled="disabled">Button 1</button>
            </td>
          </tr>
          <tr>
            <td>
              Primary
            </td>
            <td>
              <button className="primary">Button 1</button>
            </td>
            <td>
              <button className="primary hover">Button 1</button>
            </td>
            <td>
              <button className="primary focus">Button 1</button>
            </td>
            <td>
              <button className="primary active">Button 1</button>
            </td>
            <td>
              <button disabled="disabled" className="primary">Button 1</button>
            </td>
          </tr>
          <tr>
            <td>
              Subdude
            </td>
            <td>
              <button className="slim">Button 1</button>
            </td>
            <td>
              <button className="slim hover">Button 1</button>
            </td>
            <td>
              <button className="slim focus">Button 1</button>
            </td>
            <td>
              <button className="slim active">Button 1</button>
            </td>
            <td>
              <button disabled="disabled" className="slim">Button 1</button>
            </td>
          </tr>
          </tbody>
        </table>

      </section>
    </div>
  );
}

export default App;
