/**
 * Created by takaruz on 10/3/16.
 */
import React, {PropTypes} from 'react';
import {MenuItem, SelectField} from 'material-ui';

import '../../theme/styles.scss'

function makeItemText(version, current) {
  let number  = version.versionName
  let date    = ` : ${version.releaseDate}`
  let hash    = ` : (${version.hashCode})`
  let status  = version.status == "" ? "" : ` : ${version.status}`
  let extra   = current == number ? " (Current version)" : ""
  return number + date + hash + status + extra
}

const DropDownVersionList = ({
  current,
  value,
  versions,
  errorText,
  handleChange
}) => (
  <SelectField
    className="textLeft"
    floatingLabelText="Select Version"
    fullWidth={true}
    value={value}
    errorText={errorText}
    onChange={(event, key, payload) => handleChange(payload, 'version')}>
    {
      versions.map((version) => (
        <MenuItem
          value={version.versionCode}
          key={version.versionCode}
          primaryText={makeItemText(version, current)}
        />
      ))
    }
  </SelectField>
)

// Assign props to components
DropDownVersionList.propTypes = {
  value: PropTypes.number.isRequired,
  versions: PropTypes.array.isRequired,
  errorText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default DropDownVersionList
