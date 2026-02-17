import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

// Animation pour l'apparition du sous-titre de gauche à droite
export const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
// Keyframes for fade-in animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const MainBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const MainContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 1s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const MainP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const MainSubtitle = styled.p`
  margin-top: 16px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  background: linear-gradient(90deg, #6a11cb, #2575fc); /* Même gradient que le titre */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5; /* Assure un bon espacement vertical */
  opacity: 0; /* Assure qu'il est invisible par défaut */
  animation: ${slideInFromLeft} 1s ease-out forwards; /* Ajout de "forwards" pour conserver l'état final */
  animation-delay: 1s; /* Délais après l'apparition du titre principal */

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const MainBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  //margin-top: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  //margin-top: 8px;
  font-size: 20px;
`;
