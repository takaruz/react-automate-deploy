/**
 * Created by takaruz on 10/4/16.
 */
import React, {PropTypes} from 'react';
import {Checkbox, Dialog, Divider, FlatButton} from 'material-ui';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {table} from '../../theme/styles'

import styles from '../../theme/styles.scss'

// Actions list in dialog
const actions = (disabled, handle) => [
  <FlatButton
    label="Cancel"
    primary={true}
    onTouchTap={handle}
  />,
  <FlatButton
    label="Submit"
    primary={true}
    disabled={disabled}
    onTouchTap={handle}
  />
]

const DialogModal = ({
  client,
  detail,
  target,
  disabled,
  open,
  handleClose,
  handleCheck
}) => (
  <Dialog
    title="Summary"
    titleStyle={{border: 0, paddingBottom: 12}}
    actions={actions(disabled, handleClose)}
    modal={true}
    open={open}
    contentClassName={styles['dialog']}
    autoScrollBodyContent={true}
  >
    <Table selectable={false}>
      <TableBody displayRowCheckbox={false} style={{paddingTop: 4}}>
        <TableRow style={table.tdHeight40}>
          <TableRowColumn style={table.subject}>Client</TableRowColumn>
          <TableRowColumn style={table.value}>{client ? client : "-"}</TableRowColumn>
        </TableRow>
        <TableRow style={table.tdHeight40}>
          <TableRowColumn style={table.subject}>Application</TableRowColumn>
          <TableRowColumn style={table.value}>{detail.name ? detail.name : "-"}</TableRowColumn>
        </TableRow>
        <TableRow style={table.tdHeight40}>
          <TableRowColumn style={table.subject}>From Version</TableRowColumn>
          <TableRowColumn style={table.value}>{detail.version ? detail.version : "-"}</TableRowColumn>
        </TableRow>
        <TableRow style={table.tdHeight40}>
          <TableRowColumn style={table.subjectBold}>To Version</TableRowColumn>
          <TableRowColumn style={table.valueBold}>{target ? target : "-"}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>

    <Divider />

    <Checkbox
      label="Confirm to update/rollback to client application."
      onCheck={handleCheck}
      style={{fontSize: 13, marginTop: 24}}
    />
  </Dialog>
)

// Assign props to components
DialogModal.propTypes = {
  client: PropTypes.string.isRequired,
  detail: PropTypes.object.isRequired,
  target: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired
}

export default DialogModal
