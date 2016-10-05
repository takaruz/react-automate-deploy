/**
 * Created by takaruz on 9/30/16.
 */
import React, {PropTypes} from 'react';
import {MenuItem, SelectField} from 'material-ui';

import '../../theme/styles.scss'

const DropDownClientList = ({
  value,
  clients,
  errorText,
  handleChange
}) => (
  <SelectField
    className="textLeft"
    floatingLabelText="Select Client"
    fullWidth={true}
    value={value}
    errorText={errorText}
    onChange={(event, key, payload) => handleChange(payload, 'client')}>
    {
      clients.map((client) => (
        <MenuItem
          value={client.id}
          key={client.id}
          primaryText={client.name}
        />
      ))
    }
  </SelectField>
)

// Assign props to components
DropDownClientList.propTypes = {
  value: PropTypes.number.isRequired,
  clients: PropTypes.array.isRequired,
  errorText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default DropDownClientList
