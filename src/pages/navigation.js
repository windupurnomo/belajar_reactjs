import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default props => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavLink className="navbar-brand" to="/">
        Bakamla
      </NavLink>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" activeClassName="active" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" activeClassName="active" to="/todo">
              To Do
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" activeClassName="active" to="/fruit">
              Fruit
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" activeClassName="active" to="/city">
              Kota
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/pegawai"
            >
              Pegawai
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <NavLink className="dropdown-item" to="/about">
                About
              </NavLink>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
