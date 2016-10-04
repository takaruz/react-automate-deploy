import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup, RaisedButton} from 'material-ui';
import DropDownSiteList from './SiteList'
import DropDownAppList from './AppList'
import DropDownVersionList from './VersionList'
import ApplicationDetail from './SiteDetail'
import fetch from 'isomorphic-fetch'
import {CLIENT_ENDPOINT, LIST_ENDPOINT, VERSION_ENDPOINT} from '../../constants/endpoints'

import '../../theme/styles.scss'

export default class DeployComponent extends Component {

  state = {
    expanded: false,
    apps: [],
    sites: [],
    versions: [],
    valueApp: -1,
    valueClient: -1,
    valueVersion: -1,
    detail: {}
  }

  // TODO: move to manager or reducer.
  getApplication(id) {
    fetch(CLIENT_ENDPOINT + '/' + id)
      .then((response) => response.json())
      .then((apps) => {
        this.setState({apps: apps.application})
      })
  }

  // TODO: move to manager or reducer.
  getVersions(id) {
    this.setState({detail: this.state.apps.filter(x => x.id === id)[0]}) // set detail in card.
    fetch(VERSION_ENDPOINT + '/' + id)
      .then((response) => response.json())
      .then((versions) => this.setState({versions: versions.version}))
  }

  // TODO: move to manager or reducer.
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
      this.setState({
        valueApp: value
      })
      this.getVersions(value)
    } else if (type == 'version') {
      this.setState({
        valueVersion: value
      })
    }
  }

  render() {
    const {expanded, apps, sites, versions, valueApp, valueClient, valueVersion, detail} = this.state

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

        <DropDownVersionList
          value={valueVersion}
          versions={versions}
          handleChange={this.handleChange}
        />

        <ApplicationDetail
          detail={detail}
          expanded={expanded}
        />

        <RadioButtonGroup name="deployOption" defaultSelected="1">
          <RadioButton
            value="1"
            label="Deploy without configure folder."
          />
          <RadioButton
            value="2"
            label="Deploy with replace all configure folder."
          />
          <RadioButton
            value="3"
            label="Deploy with copy configure folder to client."
          />
        </RadioButtonGroup>

        <RaisedButton label="Commit job" secondary={true} style={{marginTop: 16}}/>
      </div>
    )
  }
}
