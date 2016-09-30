import React, {Component} from 'react'
import {AppBar} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles';
import Menu from './Menu'
import LoginDetail from './LoginDetail'
import {browserHistory} from 'react-router'
import style from './App.scss'

export default class App extends Component {
  state = {
    isDocked: true,
    showMenu: true
  }

  handleResize = () => {
    if (window.innerWidth < 756) {
      this.setState({showMenu: false, isDocked: false})
    } else {
      this.setState({showMenu: true, isDocked: true})
    }
  }

  handleTouchTap = () => {
    this.setState({showMenu: true})
  }

  handleLink = (target) => {
    browserHistory.push('/' + target)

    if (window.innerWidth < 756)
      this.setState({showMenu: false})
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    const {isDocked, showMenu} = this.state

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            className={style['header']}
            title="Title"
            iconElementRight={<LoginDetail />}
            onLeftIconButtonTouchTap={this.handleTouchTap}
          />
          <Menu
            isDocked={isDocked}
            isOpen={showMenu}
            handleLink={this.handleLink}
          />
          <div className={style['container']}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}