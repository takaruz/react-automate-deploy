import React, {Component, PropTypes} from 'react';
import {RadioButton, RadioButtonGroup, RaisedButton} from 'material-ui';
import DropDownClientList from './ClientList'
import DropDownAppList from './AppList'
import DropDownVersionList from './VersionList'
import CardAppDetail from './AppDetail'
import CommitDialog from './CommitDialog'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {
  loadClients,
  loadApplications,
  loadVersions,
  selectItem,
  clearSelectedItem,
  submitJob
} from '../../actions/deploy'
import {
  SELECT_APP,
  SELECT_CLIENT,
  SELECT_VERSION,
  INIT_APP,
  INIT_VERSION
} from '../../constants/actionTypes'
import {
  DEPLOY_OPT_1,
  DEPLOY_OPT_2,
  DEPLOY_OPT_3
} from '../../constants/strings'


import '../../theme/styles.scss'

class DeployComponent extends Component {

  static propTypes = {
    app: PropTypes.object.isRequired,
    apps: PropTypes.array.isRequired,
    client: PropTypes.object.isRequired,
    clients: PropTypes.array.isRequired,
    version: PropTypes.object.isRequired,
    versions: PropTypes.array.isRequired,
    boundLoadApps: PropTypes.func.isRequired,
    boundLoadClients: PropTypes.func.isRequired,
    boundLoadVersions: PropTypes.func.isRequired,
    boundSelectItem: PropTypes.func.isRequired,
    boundClearSelectedItem: PropTypes.func.isRequired,
    boundSubmitJob: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.boundLoadClients()
  }

  state = {
    openModal: false, // state summary modal
    disabled: true,  // state summary submit
    expanded: false,  // state expand card summary
    errorApp: "",
    errorClient: "",
    errorVersion: "",
    deploy_opt: 3,
  }

  clearErrorTexts = () => {
    this.setState({
      errorApp: "",
      errorClient: "",
      errorVersion: ""
    })
  }

  validateForm = () => {
    const {app, client, version} = this.props
    let hasError = false;
    this.clearErrorTexts()
    if (app.id == -1) {
      this.setState({errorApp: "Application is not selected."})
      hasError = true
    }
    if (client.id == -1) {
      this.setState({errorClient: "Client is not selected."})
      hasError = true
    }
    if (version.id == -1) {
      this.setState({errorVersion: "Version is not selected."})
      hasError = true
    }
    return hasError
  }

  /********* Start Handle Change ***********/

  handleChange = (value, type) => {
    const {clients, apps, versions, boundLoadApps, boundLoadVersions, boundSelectItem, boundClearSelectedItem} = this.props
    if (type == SELECT_CLIENT) {
      boundSelectItem(value, clients, type)
      boundLoadApps(value)
      boundClearSelectedItem(INIT_APP)
      boundClearSelectedItem(INIT_VERSION)
    } else if (type == SELECT_APP) {
      boundSelectItem(value, apps, type)
      boundLoadVersions(value)
      boundClearSelectedItem(INIT_VERSION)
    } else if (type == SELECT_VERSION) {
      boundSelectItem(value, versions, type)
    }
  }

  /********* Start Handle Modal ***********/

  handleOpenModal = () => {
    if (!this.validateForm())
      this.setState({openModal: true})
  }

  handleCloseModal = () => {
    this.setState({openModal: false})
  }

  handleCheckModal = (event, checked) => {
    this.setState({disabled: !checked})
  }

  handleSubmit = () => {
    const data = {
      app: this.props.app,
      client: this.props.client,
      version: this.props.version
    }
    this.props.boundSubmitJob(data)
    this.setState({openModal: false})
  }

  /********** End Handle Modal ***********/

  render() {
    const {
      openModal,
      disabled,
      expanded,
      errorApp,
      errorClient,
      errorVersion,
      deploy_opt
    } = this.state
    const {app, apps, client, clients, version, versions} = this.props

    return (
      <div className="contentContainer">
        {/*<h1 className="textCenter">Deploy / Rollback</h1>*/}
        <form>
          <DropDownClientList
            value={client.id}
            clients={clients}
            errorText={errorClient}
            handleChange={this.handleChange}
          />

          <DropDownAppList
            value={app.id}
            apps={apps}
            errorText={errorApp}
            handleChange={this.handleChange}
          />

          <DropDownVersionList
            current={app.version}
            value={version.id}
            versions={versions}
            errorText={errorVersion}
            handleChange={this.handleChange}
          />
          <CardAppDetail
            client={client}
            app={app}
            expanded={expanded}
          />

          <RadioButtonGroup name="deployOption" defaultSelected={3}>
            <RadioButton
              value={1}
              label={DEPLOY_OPT_1}
            />
            <RadioButton
              value={2}
              label={DEPLOY_OPT_2}
            />
            <RadioButton
              value={3}
              label={DEPLOY_OPT_3}
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
            detail={app}
            target={version.name}
            deploy_opt={deploy_opt}
            disabled={disabled}
            open={openModal}
            handleSubmit={this.handleSubmit}
            handleClose={this.handleCloseModal}
            handleCheck={this.handleCheckModal}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  apps: state.apps,
  client: state.client,
  clients: state.clients,
  version: state.version,
  versions: state.versions
})

const mapDispatchToProps = (dispatch) => ({
  boundLoadClients() {
    dispatch(loadClients())
  },
  boundLoadApps(id) {
    dispatch(loadApplications(id))
  },
  boundLoadVersions(id) {
    dispatch(loadVersions(id))
  },
  boundSelectItem(id, arr, type) {
    dispatch(selectItem(id, arr, type))
  },
  boundClearSelectedItem(type) {
    dispatch(clearSelectedItem(type))
  },
  boundSubmitJob(value) {
    dispatch(submitJob(value))
  }
})

DeployComponent = reduxForm({
  form: 'deploy'
})(DeployComponent)

DeployComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeployComponent)

export default DeployComponent