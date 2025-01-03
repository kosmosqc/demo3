import styled from "styled-components";


export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto; /* Ajuster pour s'adapter au contenu sur mobile */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  @media screen and (max-width: 480px) {
    padding: 0 16px; /* Réduire légèrement les marges */
  }
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const Topline = styled.p`
  color: #5f43b2;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 36px; /* Ajuste la taille pour les tablettes */
  }

  @media screen and (max-width: 480px) {
    font-size: 28px; /* Ajuste encore plus pour les mobiles */
  }
`;
export const Subtitle = styled.p`
  margin-top: 16px;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: auto;

  margin-left: ${({ marginSet }) => (marginSet ? "125px" : "0px")};

  @media screen and (max-width: 768px) {
    margin-left: 0; /* Centrer les images sur mobile */
    max-width: 100%; /* S'assurer qu'elles ne débordent pas */
  }
`;

export const Img = styled.img`
  width: ${({ widthSet }) => (widthSet ? "100%" : "50%")};

  margin: 0 0 10px 0;
  padding: 0;
`;
