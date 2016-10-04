import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup, RaisedButton} from 'material-ui';
import DropDownClientList from './ClientList'
import DropDownAppList from './AppList'
import DropDownVersionList from './VersionList'
import CardAppDetail from './AppDetail'
import CommitDialog from './CommitDialog'
import fetch from 'isomorphic-fetch'
import {CLIENT_ENDPOINT, LIST_ENDPOINT, VERSION_ENDPOINT} from '../../constants/endpoints'

import '../../theme/styles.scss'

export default class DeployComponent extends Component {

  state = {
    openModal: false, // state summary modal
    disabled: true,  // state summary submit
    expanded: false,  // state expand card summary

    apps: [],
    appId: -1,

    clients: [],
    clientId: -1,
    clientName: "",

    versions: [],
    versionId: -1,
    versionCurrent: "",

    detail: {}
  }

  // TODO: move to manager or reducer.
  getApplication = (id) => {
    fetch(CLIENT_ENDPOINT + '/' + id)
      .then((response) => response.json())
      .then((apps) => {
        this.setState({apps: apps.application})
      })
    this.setState({
      clientName: this.state.clients.filter(x => x.id === id)[0].name,  // set client name.
      detail: {}  // init detail data.
    })
  }

  // TODO: move to manager or reducer.
  getVersions = (id) => {
    this.setState({
      detail: this.state.apps.filter(x => x.id === id)[0],  // set detail in card.
      versionCurrent: this.state.apps.filter(x => x.id === id)[0].version // set current version name
    })
    fetch(VERSION_ENDPOINT + '/' + id)
      .then((response) => response.json())
      .then((versions) => this.setState({versions: versions.version}))
  }

  // TODO: move to manager or reducer.
  componentDidMount() {
    fetch(LIST_ENDPOINT)
      .then((response) => response.json())
      .then((clients) => this.setState({clients}))
  }

  handleChange = (value, type) => {
    if (type == 'client') {
      this.setState({
        clientId: value,
        appId: -1  // deselect application.
      })
      this.getApplication(value)
    } else if (type == 'application') {
      this.setState({
        appId: value
      })
      this.getVersions(value)
    } else if (type == 'version') {
      this.setState({
        versionId: value
      })
    }
  }

  /********* Start Handle Modal ***********/

  handleOpenModal = () => {
    this.setState({openModal: true})
  }

  handleCloseModal = () => {
    this.setState({openModal: false})
  }

  handleCheckModal = (event, checked) => {
    this.setState({disabled: !checked})
  }

  /********** End Handle Modal ***********/

  render() {
    const {
      openModal,
      disabled,
      detail,
      expanded,
      apps,
      appId,
      clients,
      clientId,
      clientName,
      versions,
      versionId,
      versionCurrent
    } = this.state

    return (
      <div className="contentContainer">
        <h1 className="textCenter">Deploy / Rollback</h1>

        <DropDownClientList
          value={clientId}
          clients={clients}
          handleChange={this.handleChange}
        />
        <DropDownAppList
          value={appId}
          apps={apps}
          handleChange={this.handleChange}
        />

        <DropDownVersionList
          current={versionCurrent}
          value={versionId}
          versions={versions}
          handleChange={this.handleChange}
        />

        <CardAppDetail
          client={clientName}
          detail={detail}
          expanded={expanded}
        />

        <RadioButtonGroup name="deployOption" defaultSelected="3">
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
            label="Deploy with copy configure folder to default configure."
          />
        </RadioButtonGroup>

        <RaisedButton
          label="Commit job"
          secondary={true}
          style={{marginTop: 16}}
          onTouchTap={this.handleOpenModal}
        />

        <CommitDialog
          disabled={disabled}
          open={openModal}
          handleClose={this.handleCloseModal}
          handleCheck={this.handleCheckModal}
        />

      </div>
    )
  }
}
