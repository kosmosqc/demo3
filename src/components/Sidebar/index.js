import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="about">
              À propos
            </SidebarLink>
            <SidebarLink onClick={toggle} to="parcour">
              Parcours & expérience
            </SidebarLink>
            <SidebarLink onClick={toggle} to="projet">
              Projets
            </SidebarLink>
            <SidebarLink onClick={toggle} to="exp">
              Éxperience
            </SidebarLink>
            <SidebarLink as="a" // Permet de transformer le NavLinks en lien classique
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer">
              C.V
            </SidebarLink>
          </SidebarMenu>
          {
            <SideBtnWrap>
              <SidebarRoute onClick={toggleHome} to="/Skill">
                Skill
              </SidebarRoute>
            </SideBtnWrap>
          }
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
