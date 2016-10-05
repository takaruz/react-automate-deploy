/**
 * Created by takaruz on 10/3/16.
 */
import React, {PropTypes} from 'react';
import {MenuItem, SelectField} from 'material-ui';
import {SELECT_VERSION} from '../../constants/actionTypes'

import '../../theme/styles.scss'

function makeItemText(version, current) {
  let number  = version.name
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
    onChange={(event, key, payload) => handleChange(payload, SELECT_VERSION)}>
    {
      versions.map((version) => (
        <MenuItem
          value={version.id}
          key={version.id}
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
