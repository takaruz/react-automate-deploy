/**
 * Created by takaruz on 9/30/16.
 */
import React, {PropTypes} from 'react';
import {MenuItem, SelectField} from 'material-ui';

import '../../theme/styles.scss'

const DropDownSiteList = ({
  value,
  apps,
  handleChange
}) => (
  <SelectField
    className="textLeft"
    floatingLabelText="Select Application"
    fullWidth={true}
    value={value}
    onChange={(event, key, payload) => handleChange(payload, 'application')}>
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
  handleChange: PropTypes.func.isRequired
}

export default DropDownSiteList
