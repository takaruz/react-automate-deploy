import React, {Component, PropTypes} from 'react';
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {table} from '../../theme/styles'

const JobsTable = ({jobs}) => (
  <Table selectable={false}>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
      enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn style={table.smallPadding}>Job ID</TableHeaderColumn>
        <TableHeaderColumn style={table.smallPadding}>Client</TableHeaderColumn>
        <TableHeaderColumn style={table.smallPadding}>Application</TableHeaderColumn>
        <TableHeaderColumn style={table.smallPadding}>Current Version</TableHeaderColumn>
        <TableHeaderColumn style={table.smallPadding}>Target Version</TableHeaderColumn>
        <TableHeaderColumn style={table.smallPadding}>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} style={{paddingTop: 4}}>
      {
        jobs.map((job) => (
          < TableRow>
            <TableRowColumn style={table.smallPadding}>{job.id}</TableRowColumn>
            <TableRowColumn style={table.smallPadding}>{job.client.name}</TableRowColumn>
            <TableRowColumn style={table.smallPadding}>{job.app.name}</TableRowColumn>
            <TableRowColumn style={table.smallPadding}>{job.app.version}</TableRowColumn>
            <TableRowColumn style={table.smallPadding}>{job.version.name}</TableRowColumn>
            <TableRowColumn style={table.smallPadding}>In Progress</TableRowColumn>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
)

// Assign props to components
JobsTable.propTypes = {
  jobs: PropTypes.array.isRequired,
}

export default JobsTable
