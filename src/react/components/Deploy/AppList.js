/**
 * Created by takaruz on 9/30/16.
 */
import React, {PropTypes} from 'react';
import {MenuItem, SelectField} from 'material-ui';
import {SELECT_APP} from '../../constants/actionTypes'

import '../../theme/styles.scss'

const DropDownSiteList = ({
  value,
  apps,
  errorText,
  handleChange
}) => (
  <SelectField
    className="textLeft"
    floatingLabelText="Select Application"
    fullWidth={true}
    value={value}
    errorText={errorText}
    onChange={(event, key, payload) => handleChange(payload, SELECT_APP)}>
    {
      apps.map((app) => (
        <MenuItem
          value={app.id}
          key={app.id}
          primaryText={app.name}
        />
      ))
    }
  </SelectField>
)

// Assign props to components
DropDownSiteList.propTypes = {
  value: PropTypes.number.isRequired,
  apps: PropTypes.array.isRequired,
  errorText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default DropDownSiteList
