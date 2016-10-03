/**
 * Created by takaruz on 9/30/16.
 */
import React, {PropTypes} from 'react';
import {MenuItem, SelectField} from 'material-ui';

import '../../theme/styles.scss'

const DropDownSiteList = ({
  value,
  sites,
  handleChange
}) => (
  <SelectField
    className="textLeft"
    floatingLabelText="Select Client"
    floatingLabelFixed={true}
    fullWidth={true}
    value={value}
    onChange={(event, key, payload) => handleChange(payload, 'client')}>
    {
      sites.map((site) => (
        <MenuItem
          value={site.id}
          key={site.id}
          primaryText={site.name}
        />
      ))
    }
  </SelectField>
)

// Assign props to components
DropDownSiteList.propTypes = {
  value: PropTypes.number.isRequired,
  sites: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default DropDownSiteList
