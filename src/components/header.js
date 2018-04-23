import React, { Component } from 'react';
import Link from 'gatsby-link'
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 40px 30px;
  border-bottom: solid 1px #D3D3D3;
  .nav-button {
    text-decoration: none;
    color: #333;
    border-bottom: 4px solid #FFF;
  }
  .nav-button:hover {
    border-bottom: 4px solid #F78E23;
    text-decoration: none;
    color: #333;
  }
  img {
    max-width: 300px;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      padding: 20px 15px 0 20px;
      list-style: none;
      font-size: 14px;
      min-width: 100px;
    }
  }
`

export default class Header extends Component {
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
      <HeaderWrapper>
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
        <Link to="/"><img alt={this.props.siteTitle} src="https://d3lut3gzcpx87s.cloudfront.net/image_encoded/aHR0cHM6Ly9zaWxrc3RhcnQuczMuYW1hem9uYXdzLmNvbS8yMzUxYjhkZC05NzRiLTE3OGQtODc3Ny0wYmM0ZTQ5Y2M3NTMucG5n/540x100fPNG" /></Link>
        <nav>
          <ul>
            <li>
              <Link to="/personal-dashboard">
                <Button className="nav-button" color="link" size="sm">PERSONAL DASHBOARD</Button>
              </Link>
            </li>
            <li>
              <ButtonDropdown isOpen={this.state.dealDropdownOpen} size="sm" toggle={() => {
                this.setState({
                  dealDropdownOpen: !this.state.dealDropdownOpen
                });
              }}>
                <DropdownToggle className="nav-button" color="link" caret>
                  DEALS
                </DropdownToggle>
                <DropdownMenu>
                  <Link to="/my-deals"><DropdownItem>My Deals</DropdownItem></Link>
                  <Link to="submit-deal"><DropdownItem>Submit New Deal</DropdownItem></Link>
                </DropdownMenu>
              </ButtonDropdown>
            </li>
            <li>
              <ButtonDropdown isOpen={this.state.exitDropdownOpen} size="sm" toggle={() => {
                this.setState({
                  exitDropdownOpen: !this.state.exitDropdownOpen
                });
              }}>
                <DropdownToggle className="nav-button" color="link" caret>
                  EXITS
                </DropdownToggle>
                <DropdownMenu>
                  <Link to="/my-exits"><DropdownItem>My Exits</DropdownItem></Link>
                  <Link to="submit-exit"><DropdownItem>Submit New Exit</DropdownItem></Link>
                </DropdownMenu>
              </ButtonDropdown>
            </li>
            <li>
              <ButtonDropdown isOpen={this.state.userDropdownOpen} size="sm" toggle={() => {
                this.setState({
                  userDropdownOpen: !this.state.userDropdownOpen
                });
              }}>
                <DropdownToggle className="nav-button" color="link" caret>
                  USER
                </DropdownToggle>
                <DropdownMenu right="true">
                  <Link to="/profile"><DropdownItem>My Profile</DropdownItem></Link>
                  <DropdownItem divider />
                  <Link to="#"><DropdownItem>Log Out</DropdownItem></Link>
                </DropdownMenu>
              </ButtonDropdown>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
      </HeaderWrapper>
    )
  }
};