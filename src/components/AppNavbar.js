import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export class AppNavbar extends React.Component {

    state = {
      isOpen: false
    };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark" color="light" light expand="md">
          <NavbarBrand className="nav-head" href="/">Afrida</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="active" href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#education">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;