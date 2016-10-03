/**
 * Created by takaruz on 10/3/16.
 */
import React, {PropTypes} from 'react';
import {MenuItem, SelectField} from 'material-ui';

import '../../theme/styles.scss'

const DropDownVersionList = ({
  value,
  versions,
  handleChange
}) => (
  <SelectField
    className="textLeft"
    floatingLabelText="Select Version"
    floatingLabelFixed={true}
    fullWidth={true}
    value={value}
    onChange={(event, key, payload) => handleChange(payload, 'version')}>
    {
      versions.map((item) => (
        <MenuItem
          value={item.versionCode}
          key={item.versionCode}
          primaryText={
            item.versionName + ' : ' +
            item.releaseDate + ' : (' +
            item.hashCode + ')' + ' ' +
            item.status
          }
        />
      ))
    }
  </SelectField>
)

// Assign props to components
DropDownVersionList.propTypes = {
  value: PropTypes.number.isRequired,
  versions: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default DropDownVersionList
