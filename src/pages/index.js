import React, { Component } from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


export default class IndexPage extends Component {

  state = {
    dealDropdownOpen: false,
    exitDropdownOpen: false,
    userDropdownOpen: false,
    open: false,
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <div className="dashboard-wrapper">
        <div>
          <FlatButton
            onClick={this.handleClick}
            label="USER"
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <Link to="/profile"><MenuItem primaryText="My Profile" /></Link>
              <MenuItem
                onClick={this.handleRequestClose} primaryText="Help &amp; feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Sign out" />
            </Menu>
          </Popover>
        </div>
        <h1>General Dashboard</h1>
        <p>Here you can find general investment information.</p>
      </div>
    )
  }
};