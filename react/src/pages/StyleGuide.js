import React from 'react';

import { Button } from '../api';
import Atomic from '../components/Atomic';

const StyleGuide = () => (
  <>
    <h1 className="guide-title">
      Yidhra <small>The Wizehive Atomic Style Guide</small>
    </h1>

    <h1 className="guide-book">Atomic Components</h1>

    <h1 className="guide-chapter">Atoms</h1>

    <section className="guide">
      <header>
        <h2>Typography</h2>
      </header>
      <Atomic title="atom-page-title">
        <h1 className="atom-page-title">Page Title</h1>
      </Atomic>
      <Atomic title="atom-header-section">
        <h2 className="">Section Header</h2>
      </Atomic>
    </section>

    <section className="guide">
      <header>
        <h2>Buttons</h2>
      </header>

      <Atomic title="atom-button-default">
        <button>Default Button</button>
        <button className="hover">Default Button Hovered</button>
        <button className="focus">Default Button Focused</button>
        <button className="active">Default Button Active</button>
        <button disabled="disabled">Default Button Disabled</button>
      </Atomic>
      <Atomic title="atom-button-primary">
        <button className="primary">Primary Button</button>
        <button className="primary hover">Primary Button Hovered</button>
        <button className="primary focus">Primary Button Focused</button>
        <button className="primary active">Primary Button Active</button>
        <button disabled="primary disabled">Primary Button Disabled</button>
      </Atomic>
      <Atomic title="atom-button-subdued">
        <button className="subdued">Subdued Button</button>
        <button className="subdued hover">Subdued Button Hovered</button>
        <button className="subdued focus">Subdued Button Focused</button>
        <button className="subdued active">Subdued Button Active</button>
        <button disabled="subdued disabled">Subdued Button Disabled</button>
      </Atomic>
    </section>

    <section className="guide">
      <header>
        <h2>Images</h2>
      </header>
      <Atomic title="atom-image-circle" usage="Height and Width must be set on the element">
        <img className="atom-image-circle" src="img/Yidhra-face.jpg" style="height: 40px; width:40px;" />
          <img className="atom-image-circle" src="img/Yidhra-face.jpg" style="height: 70px; width:70px;" />
            <img className="atom-image-circle" src="img/Yidhra-face.jpg" style="height: 120px; width:120px;" />
      </Atomic>
    </section>

    <section className="guide">
      <header>
        <h2>Inputs</h2>
      </header>
      <Atomic title="atom-input-select">
        <select>
          <option>Something</option>
          <option>Something More</option>
        </select>
      </Atomic>
    </section>

    <h1 className="guide-chapter">Molecules</h1>

    <section className="guide">
      <header>
        <h2>Counter Labeled</h2>
      </header>
      <Atomic title="mol-counter-labeled">
        <article className="mol-counter-labeled" title="1,358 Submissions">
          <span>1,358</span>
          <small>Submissions</small>
        </article>
      </Atomic>
    </section>

    <h1 className="guide-chapter">Organisms</h1>

    <section className="guide">
      <header>
        <h2>Tables</h2>
      </header>

      <h3>Dashboard</h3>

      <Atomic title="org-table-dashboard">
        <table className="org-table-dashboard">
          <thead>
          <tr>
            <th>Title 1</th>
            <th>Something else</th>
            <th>Date</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Icon</td>
            <td>Some Info</td>
            <td>March 2020</td>
            <td>
              <button className="subdued">View Data</button>
            </td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>Some Info</td>
            <td>March 2020</td>
            <td>
              <button className="subdued">View Data</button>
            </td>
          </tr>
          </tbody>
        </table>
      </Atomic>
    </section>

    <section className="guide">
      <header>
        <h2>KPI</h2>
      </header>
      <Atomic title="org-kpi">
        <section className="org-kpi">
          <article className="mol-counter-labeled" title="1,358 Submissions">
            <span>1,358</span>
            <small>Submissions</small>
          </article>
          <article className="mol-counter-labeled" title="158 Ready for Review">
            <span>158</span>
            <small>Ready for Review</small>
          </article>
          <article className="mol-counter-labeled" title="45 Reviewed">
            <span>45</span>
            <small>Reviewed</small>
          </article>
        </section>
      </Atomic>
    </section>

    <h1 className="guide-chapter">Templates</h1>
    <section className="guide">
      <header>
        <h2>Program Console</h2>
      </header>

      <h3>Header</h3>

      <Atomic title="tpl-program-console-header">
        <header className="tpl-program-console-header">
          <div className="col-half">
            <img className="atom-image-circle" src="img/Yidhra-face.jpg" />
              <h1 className="atom-page-title">Program Console</h1>
          </div>
          <div className="col-half">
            <section className="org-kpi">
              <article className="mol-counter-labeled" title="1,358 Submissions">
                <span>1,358</span>
                <small>Submissions</small>
              </article>
              <article className="mol-counter-labeled" title="158 Ready for Review">
                <span>158</span>
                <small>Ready for Review</small>
              </article>
              <article className="mol-counter-labeled" title="45 Reviewed">
                <span>45</span>
                <small>Reviewed</small>
              </article>
            </section>
          </div>
        </header>
      </Atomic>

      <h3>Portals</h3>
      <Atomic title="tpl-program-console-portals">
        <article className="tpl-program-console-portals">
          <header>Process: Scholarship Award</header>
          <div className="body">
            <table className="org-table-dashboard">
              <thead>
              <tr>
                <th>Title 1</th>
                <th>Something else</th>
                <th>Date</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Icon</td>
                <td>Some Info</td>
                <td>March 2020</td>
                <td>
                  <button className="subdued">View Data</button>
                </td>
              </tr>
              <tr>
                <td>Icon</td>
                <td>Some Info</td>
                <td>March 2020</td>
                <td>
                  <button className="subdued">View Data</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <footer>
            <button className="primary">Set Assignments</button>
          </footer>
        </article>
      </Atomic>

    </section>

    <h1 className="guide-book">Misc Information</h1>
    <section className="guide guide-colors">
      <header>
        <h2>Colors</h2>
      </header>
      <div className="guide-group">
        <div className="color dark-grey"></div>
        <div className="color dark-grey-disabled"></div>
        <div className="color light-grey"></div>
        <div className="color page-background"></div>
        <div className="color white"></div>
      </div>
      <div className="guide-group">
        <div className="color primary"></div>
        <div className="color primary-disabled"></div>
      </div>
      <div className="guide-group">
        <div className="color secondary"></div>
        <div className="color secondary-light"></div>
      </div>
    </section>
  </>
);

export default StyleGuide;
