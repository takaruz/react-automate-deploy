import React, {Component, PropTypes} from 'react';
import JobsTable from './JobsTable'
import {connect} from 'react-redux'
import {loadJobs} from '../../actions/status'
import '../../theme/styles.scss'

class DeployStatus extends Component {

  static propTypes = {
    jobs: PropTypes.array.isRequired,
    boundLoadJobs: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.boundLoadJobs()
  }

  render() {
    return (
      <div className="contentContainer">
        <h1>Update / Rollback Status</h1>
        <JobsTable
          jobs={this.props.jobs}
        />
      </div>
    )
  }
}

export default DeployStatus = connect(
  (state) => ({jobs: state.jobs}),
  {boundLoadJobs: loadJobs}
)(DeployStatus)
