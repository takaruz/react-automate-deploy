import React, {Component} from 'react'
import {AppBar} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles';
import Menu from './Menu'
import LoginDetail from './LoginDetail'
import style from './App.scss'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            className={style['header']}
            title="Title"
            iconElementRight={<LoginDetail />}
          />
          <Menu />
          <div className={style['container']}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}