import React from 'react';
import { NavBrand, NavLink, Nav, Bars, NavMenu } from './NavElements';

const CustomNav = ({ toggle }) => {
  return (
    <>
    <Nav>
      <NavBrand to="/">Financial CRM</NavBrand>
      <Bars onClick={ toggle }/>
      <NavMenu>
        <NavLink to="/ClientInput" activeStyle>Add Client</NavLink>
        <NavLink to="/Dashboard" activeStyle>Dashboard</NavLink>
      </NavMenu>
      {/* <NavBtn>
        <NavBtnLink to="/"></NavBtnLink>
      </NavBtn> */}
    </Nav>
    </>
  );
}

export default CustomNav;