import React, {Component} from 'react'
import {RaisedButton, TextField} from 'material-ui'

import '../../theme/styles.scss'

const style = {
  margin: 12,
};

export default class Settings extends Component {

  render() {
    return (
      <div className="contentContainer">
        <h1>Settings</h1>

        <TextField
          fullWidth={true}
          floatingLabelText="API URL"
          value="http://192.168.10.127:5000/api/v1"
        />
        <TextField
          fullWidth={true}
          floatingLabelText="API Key"
          value="52148ddbceb0c8a6ae0f48c2967f7b65"
        />
        <TextField
          fullWidth={true}
          floatingLabelText="Git binary"
          value="/usr/local/git"
        />
        <TextField
          fullWidth={true}
          floatingLabelText="Temporary path"
          value="/home/temp/"
        />
        <TextField
          fullWidth={true}
          floatingLabelText="Custom configuration #1"
        />
        <TextField
          fullWidth={true}
          floatingLabelText="Custom configuration #2"
        />
        <div
          style={{marginTop: 20}}>
          <RaisedButton label="Save" primary={true} style={{marginRight: 12}}/>
          <RaisedButton label="Cancel"/>
        </div>
      </div>
    )
  }
}
