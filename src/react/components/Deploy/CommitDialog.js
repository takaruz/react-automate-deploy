/**
 * Created by takaruz on 10/4/16.
 */
import React, {PropTypes} from 'react';
import {Checkbox, Dialog, FlatButton} from 'material-ui';

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
  disabled, open, handleClose, handleCheck
}) => (
  <Dialog
    title="Summary"
    actions={actions(disabled, handleClose)}
    modal={true}
    open={open}
  >
    <p>
      Detail
      ...
      ...
    </p>
    <Checkbox
      label="Confirm to deploy/rollback to client application."
      onCheck={handleCheck}
    />
  </Dialog>
)

// Assign props to components
DialogModal.propTypes = {
  disabled: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired
}

export default DialogModal
