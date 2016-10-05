import React, {Component, PropTypes} from 'react';
import {RadioButton, RadioButtonGroup, RaisedButton} from 'material-ui';
import DropDownClientList from './ClientList'
import DropDownAppList from './AppList'
import DropDownVersionList from './VersionList'
import CardAppDetail from './AppDetail'
import CommitDialog from './CommitDialog'
import fetch from 'isomorphic-fetch'
import {VERSION_ENDPOINT} from '../../constants/endpoints'

import {loadClients, loadApplications, selectClient} from '../../actions/deploy'
import {connect} from 'react-redux'

import '../../theme/styles.scss'

class DeployComponent extends Component {

  static propTypes = {
    client: PropTypes.object.isRequired,
    apps: PropTypes.array.isRequired,
    clients: PropTypes.array.isRequired,
    onLoadApps: PropTypes.func.isRequired,
    boundLoadClients: PropTypes.func.isRequired,
    onSelectClient: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.boundLoadClients()
  }

  state = {
    openModal: false, // state summary modal
    disabled: true,  // state summary submit
    expanded: false,  // state expand card summary

    appId: -1,

    versions: [],
    versionId: -1,
    versionName: "",
    versionTarget: "",

    errorApp: "",
    errorClient: "",
    errorVersion: "",

    detail: {}
  }

  // TODO: move to manager or reducer.
  getVersions = (id) => {
    fetch(VERSION_ENDPOINT + '/' + id)
      .then((response) => response.json())
      .then((versions) => this.setState({versions: versions.version}))
  }

  clearErrorTexts = () => {
    this.setState({
      errorApp: "",
      errorClient: "",
      errorVersion: ""
    })
  }

  /********* Start Handle Change ***********/

  handleChange = (value, type) => {
    const {client, clients, onLoadApps, onSelectClient} = this.props

    if (type == 'client') {
      // TODO: remove internal state
      this.setState({
        appId: -1,  // deselect application.
        versionId: -1, // deselect version.
        detail: {} // init detail data.
      })
      onSelectClient(value, clients)
      onLoadApps(value)
    } else if (type == 'application') {
      if (this.state.appId != value) {
        this.setState({
          appId: value,
          detail: this.state.apps.filter(x => x.id === value)[0],  // set detail in card.
          versionName: this.state.apps.filter(x => x.id === value)[0].version, // set current version name
          versionId: -1, // deselect version.
        })
        this.getVersions(value)
      }
    } else if (type == 'version') {
      this.setState({
        versionId: value,
        versionTarget: this.state.versions.filter(x => x.versionCode === value)[0].versionName
      })
    }
  }

  /********* Start Handle Modal ***********/

  handleOpenModal = () => {
    const {appId, versionId} = this.state
    const {client} = this.props
    let hasError = false;

    this.clearErrorTexts()
    if (appId == -1) {
      this.setState({errorApp: "Application is not selected."})
      hasError = true
    }
    if (client.id == -1) {
      this.setState({errorClient: "Client is not selected."})
      hasError = true
    }
    if (versionId == -1) {
      this.setState({errorVersion: "Version is not selected."})
      hasError = true
    }
    if (!hasError) this.setState({openModal: true})
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
      appId,
      clientName,
      versions,
      versionId,
      versionName,
      versionTarget,
      errorApp,
      errorClient,
      errorVersion
    } = this.state
    const {apps, client, clients} = this.props

    return (
      <div className="contentContainer">
        {/*<h1 className="textCenter">Deploy / Rollback</h1>*/}

        <DropDownClientList
          value={client.id}
          clients={clients}
          errorText={errorClient}
          handleChange={this.handleChange}
        />

        <DropDownAppList
          value={appId}
          apps={apps}
          errorText={errorApp}
          handleChange={this.handleChange}
        />

        <DropDownVersionList
          current={versionName}
          value={versionId}
          versions={versions}
          errorText={errorVersion}
          handleChange={this.handleChange}
        />
        <CardAppDetail
          client={client}
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

        {/* Button handle commit command to job scheduler */}
        <RaisedButton
          label="Commit job"
          secondary={true}
          style={{marginTop: 20}}
          onTouchTap={this.handleOpenModal}
        />

        <CommitDialog
          client={client.name}
          detail={detail}
          target={versionTarget}
          disabled={disabled}
          open={openModal}
          handleClose={this.handleCloseModal}
          handleCheck={this.handleCheckModal}
        />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  client: state.client,
  clients: state.clients,
  apps: state.apps

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  boundLoadClients() {
    dispatch(loadClients())
  },
  onLoadApps(id) {
    dispatch(loadApplications(id))
  },
  onSelectClient(id, object) {
    dispatch(selectClient(id, object))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeployComponent)