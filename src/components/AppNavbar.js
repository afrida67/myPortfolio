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
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Afrida</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/Education">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/Experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/Skills">Skills</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;