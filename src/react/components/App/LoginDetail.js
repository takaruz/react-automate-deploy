/**
 * Created by takaruz on 9/30/16.
 */
import React, {Component} from 'react'
import {Avatar, ListItem} from 'material-ui';

export default class LoginDetail extends Component {
  render() {
    return (
      <ListItem
        style={{marginTop: -4, color: "white"}}
        disabled={false}
        leftAvatar={
          <Avatar
            src="avatar.jpg"
          />
        }
      >Hi, Admin</ListItem>
    )
  }
}
