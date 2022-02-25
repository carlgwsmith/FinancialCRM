import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background: #fff;
height:70px;
display:flex;
justify-content:space-between;
padding: 0.5rem calc((100vw - 2000px) / 2);
z-index:10;
border-bottom:2px solid #f3f3f3;
`

export const NavLink = styled(Link)`
color:#383838;
display:flex;
font-weight:500;
align-items:center;
text-decoration: none;
text-transform: uppercase;
font-size:.9em;
padding: 0 1rem;
height:100%;
cursor: pointer;
transition: 0.2s ease-in-out;
&.active{
  color:#ff9900;
}
&:hover{
  letter-spacing:.10em;
  color: #ffb80b;
  transition: 0.2s ease-in-out;
}
`
export const NavBrand = styled(Link)`
color:#383838;
display:flex;
font-size:1.3em;
font-weight:600;
align-items:center;
text-decoration: none;
padding: 0 2rem;
height:100%;
cursor: pointer;

&.active{
  color:#ff9900;
}
`
export const Bars = styled(FaBars)`
display:none;
color:#383838;

@media screen and (max-width:760px){
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform:translate(-100%, 75%);
  font-size:1.8rem;
  cursor:pointer;
}
`
export const NavMenu = styled.div`
  display:flex;
  align-items:center;
  //margin-right:-25px;

  @media screen and (max-width:760px){
    display:none;
  }
`

export const NavBtn = styled.nav`
display:flex;
align-items: center;
margin-right:25px;

@media screen and (max-width:760px){
  display:none;
}
`

export const NavBtnLink = styled(Link)`
border-radius:4px;
background-color:#47ff5acc;
padding:10px 22px;
color:#fff;
border:none;
outline: none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
  transition: all 0.2s ease-in-out;
  background:#fff;
  color:#010606;
}
`
export const SideNav = styled.div`
height: 100%;
width: 25%;
position: fixed;
z-index: 1;
top: 70px;
left:0;
background: rgb(241,62,116);
background: linear-gradient(180deg, rgba(241,62,116,1) 0%, rgba(90,0,33,1) 100%);
display: flex;
flex-direction: column;
align-items: left;
padding-left: 20px;
padding-top:70px;
`
export const SideNavLink = styled(Link)`
color:#fff;
display:flex;
font-weight:500;
text-decoration: none;
text-transform: uppercase;
font-size: 1em;
padding: 0 1rem;
height:100%;
cursor: pointer;
transition: 0.2s ease-in-out;
&.active{
  color:#ff9900;
}
&:hover{
  letter-spacing:.10em;
  color: #f3f3f3;
  transition: 0.2s ease-in-out;
}
`