/**
 * Created by takaruz on 10/4/16.
 */
import React, {PropTypes} from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {table} from '../../theme/styles'

const TableDetail = ({
  client,
  app
}) => (
  <Table selectable={false}>
    <TableBody displayRowCheckbox={false} style={{paddingTop: 4}}>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Client</TableRowColumn>
        <TableRowColumn style={table.value}>{client.name ? client.name : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Application</TableRowColumn>
        <TableRowColumn style={table.value}>{app.name ? app.name : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Current Version</TableRowColumn>
        <TableRowColumn style={table.value}>{app.version ? app.version : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Last Updated</TableRowColumn>
        <TableRowColumn style={table.value}>{app.lastUpdate ? app.lastUpdate : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>IP Address</TableRowColumn>
        <TableRowColumn style={table.value}>{app.ip ? app.ip : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Server Status</TableRowColumn>
        <TableRowColumn style={table.value}>{app.ServStatus ? app.ServStatus : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>App Status</TableRowColumn>
        <TableRowColumn style={table.value}>{app.AppStatus ? app.AppStatus : "-"}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
)

// Assign props to components
TableDetail.propTypes = {
  client: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired
}

export default TableDetail