import React from 'react';
import { NavBrand, NavLink, Nav, Bars, NavMenu } from './NavElements';
import { ReactComponent as Logo } from '../Assets/finary_logo.svg';


const CustomNav = ({ toggle }) => {
  return (
    <>
    <Nav>
      <NavBrand to="/"><Logo width="200px"/></NavBrand>
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