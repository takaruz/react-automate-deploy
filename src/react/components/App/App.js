import React, {Component} from 'react'
import {AppBar} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles';
import Menu from './Menu'
import LoginDetail from './LoginDetail'
import {browserHistory} from 'react-router'
import style from './App.scss'

const inline = {
  title: {
    textAlign: "center",
    textTransform: "capitalize"
  },
  titleWidth: {
    textAlign: "center",
    textTransform: "capitalize",
    marginLeft: 256 // margin left for drawer menu docked.
  }
}

export default class App extends Component {
  state = {
    title: this.props.routes[1].path,
    titleStyle: inline.title,
    isDocked: false,
    showMenu: false
  }

  handleResize = () => {
    // Handle drawer menu when screen width changed.
    if (window.innerWidth < 756) {
      this.setState({showMenu: false, isDocked: false, titleStyle: inline.title})
    } else {
      this.setState({showMenu: true, isDocked: true, titleStyle: inline.titleWidth})
    }
  }

  handleRequestChange = () => {
    // Auto hide drawer menu on 'swipe', 'clickAway' and 'escape'
    this.setState({showMenu: false})
  }

  handleTouchTap = () => {
    // Open drawer menu on LeftIconButtonTouchTap
    this.setState({showMenu: true})
  }

  handleLink = (target) => {
    browserHistory.push('/' + target)
    this.setState({title: target})
    if (window.innerWidth < 756)
      this.setState({showMenu: false})
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    const {title, titleStyle, isDocked, showMenu} = this.state

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            className={style['header']}
            title={title}
            titleStyle={titleStyle}
            iconElementRight={<LoginDetail />}
            onLeftIconButtonTouchTap={this.handleTouchTap}
          />
          <Menu
            isDocked={isDocked}
            isOpen={showMenu}
            handleLink={this.handleLink}
            handleRequestChange={this.handleRequestChange}
          />
          <div className={style['container']}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}