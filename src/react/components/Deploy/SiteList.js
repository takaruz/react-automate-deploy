/**
 * Created by takaruz on 9/30/16.
 */
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch'
import {MenuItem, SelectField} from 'material-ui';

import '../../theme/styles.scss'

const items = [];
for (let i = 0; i < 20; i++) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`}/>);
}

export default class DropDownSiteList extends Component {

  state = {
    sites: [],
    value: 0
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/v1/list')
      .then((response) => response.json())
      .then((sites) => this.setState({sites}))
  }

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  render() {
    return (
      <SelectField
        className="textLeft"
        floatingLabelText="Select client site."
        floatingLabelFixed={true}
        value={this.state.value}
        onChange={this.handleChange}>
        {
          this.state.sites.map((site) => (
            <MenuItem value={site.id} key={site.id} primaryText={site.name}/>
          ))
        }
      </SelectField>
    );
  }
}
