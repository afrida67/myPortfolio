import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

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
          <NavbarBrand className="nav-head" href="/myPortfolio">Afrida</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;