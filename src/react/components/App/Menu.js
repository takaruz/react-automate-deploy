import React, {PropTypes} from 'react'
import {AppBar, Drawer, MenuItem} from 'material-ui';

const Menu = ({
  isDocked, isOpen, handleLink
}) => (
  <Drawer
    docked={isDocked}
    open={isOpen}
  >
    <AppBar title="Menu" showMenuIconButton={false}/>
    <MenuItem onTouchTap={() => handleLink("dashboard")} primaryText="Dashboard"/>
    <MenuItem onTouchTap={() => handleLink("registration")} primaryText="Registration"/>
    <MenuItem onTouchTap={() => handleLink("deploy")} primaryText="Deploy/Rollback"/>
    <MenuItem onTouchTap={() => handleLink("status")} primaryText="Job Status"/>
    <MenuItem onTouchTap={() => handleLink("settings")} primaryText="Settings"/>
    <MenuItem>...</MenuItem>
  </Drawer>
)

Menu.propTypes = {
  isDocked: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleLink: PropTypes.func.isRequired
}

export default Menu