import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
    <div>
      <div class="card">
        <div class="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <table class="striped">
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Building your first website</td>
                <td>Aug 2021</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Creating your first program (with Javascript)</td>
                <td>Oct 2021</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Front-End Web Programming with React</td>
                <td>Dec 2021</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Database Systems(SQL)</td>
                <td>Jan 2022</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
