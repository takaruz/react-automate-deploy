import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';
import SiteListTable from './SiteTable'
import DropDownSiteList from './SiteList'
import DropDownAppList from './ApplicationList'
import fetch from 'isomorphic-fetch'
import {CLIENT_ENDPOINT, LIST_ENDPOINT} from '../../constants/endpoints'

import '../../theme/styles.scss'

export default class Deploy extends Component {

  state = {
    apps: [],
    sites: [],
    valueApp: -1,
    valueClient: -1,
  }

  // TODO: move to manager or reducer.
  getApplication(id) {
    fetch(CLIENT_ENDPOINT + '/' + id)
      .then((response) => response.json())
      .then((apps) => this.setState({apps: apps.application}))
  }

  componentDidMount() {
    fetch(LIST_ENDPOINT)
      .then((response) => response.json())
      .then((sites) => this.setState({sites}))
  }

  handleChange = (value, type) => {
    if (type == 'client') {
      this.setState({
        valueClient: value,
        valueApp: -1  // deselect application.
      })
      this.getApplication(value)
    } else if (type == 'application') {
      this.setState({valueApp: value})
    }
  }

  render() {
    const {apps, sites, valueApp, valueClient} = this.state

    return (
      <div className="contentContainer">
        <h1 className="textCenter">Deploy / Rollback</h1>

        <DropDownSiteList
          value={valueClient}
          sites={sites}
          handleChange={this.handleChange}
        />

        <DropDownAppList
          value={valueApp}
          apps={apps}
          handleChange={this.handleChange}
        />

        <RaisedButton label="Deploy" primary={true} style={{margin: 12}}/>
        <RaisedButton label="Rollback" secondary={true}/>
      </div>
    )
  }
}
