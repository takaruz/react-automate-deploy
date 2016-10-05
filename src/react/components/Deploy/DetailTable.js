/**
 * Created by takaruz on 10/4/16.
 */
import React, {PropTypes} from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {table} from '../../theme/styles'

const TableDetail = ({
  client,
  detail
}) => (
  <Table selectable={false}>
    <TableBody displayRowCheckbox={false} style={{paddingTop: 4}}>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Client</TableRowColumn>
        <TableRowColumn style={table.value}>{client.name ? client.name : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Application</TableRowColumn>
        <TableRowColumn style={table.value}>{detail.name ? detail.name : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Current Version</TableRowColumn>
        <TableRowColumn style={table.value}>{detail.version ? detail.version : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Last Updated</TableRowColumn>
        <TableRowColumn style={table.value}>{detail.lastUpdate ? detail.lastUpdate : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>IP Address</TableRowColumn>
        <TableRowColumn style={table.value}>{detail.ip ? detail.ip : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>Server Status</TableRowColumn>
        <TableRowColumn style={table.value}>{detail.ServStatus ? detail.ServStatus : "-"}</TableRowColumn>
      </TableRow>
      <TableRow style={table.tdHeight40}>
        <TableRowColumn style={table.subject}>App Status</TableRowColumn>
        <TableRowColumn style={table.value}>{detail.AppStatus ? detail.AppStatus : "-"}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
)

// Assign props to components
TableDetail.propTypes = {
  client: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired
}

export default TableDetail