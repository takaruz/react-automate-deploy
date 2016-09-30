import React, {Component} from 'react';
import {Divider, RaisedButton, Paper} from 'material-ui';
import SiteListTable from './SiteTable'
import DropDownSiteList from './SiteList'

import '../../theme/styles.scss'

const style = {
  margin: 16,
  textAlign: 'center',
  display: 'inline-block',
}

export default class Deploy extends Component {

  render() {
    return (
      <div>
        <h1 className="textCenter">Deploy / Rollback</h1>
        <Paper style={style} zDepth={2}>
          <div style={{marginBottom: 12}}>
            <DropDownSiteList />
            <Divider />
            <SiteListTable />
            <Divider />
            <RaisedButton label="Deploy" primary={true} style={{margin: 12}}/>
            <RaisedButton label="Rollback" secondary={true}/>
          </div>
        </Paper>
      </div>
    )
  }
}
