import React, {Component} from 'react'
import {AppBar, Drawer, MenuItem} from 'material-ui';
import {browserHistory} from 'react-router'

export default class Menu extends Component {

  state = {
    open: true
  }

  handleLink = (target) => {
    browserHistory.push('/' + target)
    // this.setState({open: false})
  }

  render() {
    return (
      <Drawer open={this.state.open}>
        <AppBar title="Menu" showMenuIconButton={false}/>
        <MenuItem onTouchTap={this.handleLink.bind(this, "dashboard")} primaryText="Dashboard"/>
        <MenuItem onTouchTap={this.handleLink.bind(this, "registration")} primaryText="Registration"/>
        <MenuItem onTouchTap={this.handleLink.bind(this, "deploy")} primaryText="Deploy/Rollback"/>
        <MenuItem onTouchTap={this.handleLink.bind(this, "status")} primaryText="Status"/>
        <MenuItem onTouchTap={this.handleLink.bind(this, "settings")} primaryText="Settings"/>
        <MenuItem>...</MenuItem>
      </Drawer>
    )
  }
}