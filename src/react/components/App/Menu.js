import React, {PropTypes} from 'react'
import {AppBar, Divider, Drawer, MenuItem} from 'material-ui';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import RegisterIcon from 'material-ui/svg-icons/action/verified-user';
import SystemUpdateIcon from 'material-ui/svg-icons/action/system-update-alt'
import StatusIcon from 'material-ui/svg-icons/action/timeline'
import SettingIcon from 'material-ui/svg-icons/action/settings'

const Menu = ({
  isDocked, isOpen, handleLink, handleRequestChange
}) => (
  <Drawer
    docked={isDocked}
    open={isOpen}
    onRequestChange={() => handleRequestChange()}
    disableSwipeToOpen={true}
  >
    <AppBar title="Menu" showMenuIconButton={false}/>
    <MenuItem
      onTouchTap={() => handleLink("dashboard")}
      primaryText="Dashboard"
      rightIcon={<DashboardIcon />}
    />
    <MenuItem
      onTouchTap={() => handleLink("registration")}
      primaryText="Registration"
      rightIcon={<RegisterIcon />}
    />
    <MenuItem
      onTouchTap={() => handleLink("deploy")}
      primaryText="Update/Rollback"
      rightIcon={<SystemUpdateIcon />}
    />
    <MenuItem
      onTouchTap={() => handleLink("status")}
      primaryText="Job Status"
      rightIcon={<StatusIcon />}
    />
    <MenuItem
      onTouchTap={() => handleLink("settings")}
      primaryText="Settings"
      rightIcon={<SettingIcon />}/>
    <Divider />
    <MenuItem>...</MenuItem>
  </Drawer>
)

Menu.propTypes = {
  isDocked: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleLink: PropTypes.func.isRequired,
  handleRequestChange: PropTypes.func.isRequired
}

export default Menu