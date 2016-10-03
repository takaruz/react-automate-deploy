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
    floatingLabelFixed={true}
    fullWidth={true}
    value={value}
    onChange={(event, key, payload) => handleChange(payload, 'application')}>
    {
      apps.map((item) => (
        <MenuItem
          value={item.id}
          key={item.id}
          primaryText={item.name + ' : ' + item.ServStatus}
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
