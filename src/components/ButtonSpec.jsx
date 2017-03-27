import React, { Component } from 'react';
import Button from 'neugelb-ui';

class ButtonSpec extends Component {

  renderProperties(properties) {
    properties.map(function(property, index) {
      return (
        <tr>
          <td>{property.name}</td>
          <td>{property.type}</td>
          <td>{property.default}</td>
          <td>{property.description}</td>
        </tr>
      );
    });
  }

  render() {
    console.log(ButtonSpec.__docgenInfo);
    return (
      <div>
        <h1>Button</h1>
        <hr />
        <div>The is the standard button of the Commerzbank.</div>
        <h2>Examples</h2>
        <h2>Properties</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            this.renderProperties({Button.__docgenInfo.props});
          </tbody>
        </table>
      </div>
    );
  }

}

export default ButtonSpec;
