/**
 * Created by takaruz on 10/3/16.
 */
import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {FlatButton, Toggle} from 'material-ui';

const ApplicationDetail = ({
  detail, expanded
}) => (
  <Card style={{marginTop: 16, marginBottom: 16}}>
    <CardHeader
      title="Summary Detail"
      subtitle="expand to see application detail."
      showExpandableButton={true}
    />
    <CardText
      expandable={true}>
      <Table selectable={false}>
        <TableBody
          displayRowCheckbox={false}
          style={{paddingTop: 4}}
        >
          <TableRow>
            <TableRowColumn>Client</TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Application</TableRowColumn>
            <TableRowColumn>{detail.name ? detail.name : "-"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Version</TableRowColumn>
            <TableRowColumn>{detail.version ? detail.version : "-"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Last Updated</TableRowColumn>
            <TableRowColumn>{detail.lastUpdate ? detail.lastUpdate : "-"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>IP Address</TableRowColumn>
            <TableRowColumn>{detail.ip ? detail.ip : "-"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Server Status</TableRowColumn>
            <TableRowColumn>{detail.ServStatus ? detail.ServStatus : "-"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>App Status</TableRowColumn>
            <TableRowColumn>{detail.AppStatus ? detail.AppStatus : "-"}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </CardText>
  </Card>
);

// Assign props to components
ApplicationDetail.propTypes = {
  detail: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired
}

export default ApplicationDetail;