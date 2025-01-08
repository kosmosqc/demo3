import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: -80px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #c4c2c2;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  font-weight: bold;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
   @media screen and (max-width: 768px) {
   font-size: .7rem;
  }
    &:hover {
    transform: scale(1) rotate(5deg) skewX(10deg);
      letter-spacing: 0.3rem;
      color: #5f43b2;
      text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #c4c2c2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 20px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #5f43b2;
  }

  &.active {
    border-bottom: 3px solid #5f43b2;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  margin 1px;
 
  background: #5f43b2;
  white-space: nowrap;
  padding: 5px 10px;
  color: #c4c2c2;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: black;
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;
