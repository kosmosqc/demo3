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
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 24px; /* Ajoute plus d'espace autour */
  grid-gap: 20px; /* Espacement entre les colonnes */

  @media screen and (max-width: 480px) {
    padding: 20px 16px; /* Ajuste pour les petits écrans */
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
  font-size: 30px; /* Réduit légèrement la taille */
  line-height: 1.3; /* Ajoute de l'espacement entre les lignes */
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  text-align: left; /* Assure l'alignement propre */

  @media screen and (max-width: 768px) {
    font-size: 32px; /* Ajuste encore plus pour les écrans moyens */
  }

  @media screen and (max-width: 480px) {
    font-size: 28px; /* Taille confortable pour mobile */
  }
`;

export const Subtitle = styled.p`
  margin-top: 16px;
  max-width: 400px; /* Réduit la largeur pour une meilleure lisibilité */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.8; /* Espacement plus généreux */
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  font-family: "Roboto", Arial, sans-serif; /* Police propre et lisible */
  text-align: left; /* Remplace justify par left */
`;


export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
 font-size: 15px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: auto;
  margin-left: ${({ marginSet }) => (marginSet ? "125px" : "0px")};

  @media screen and (max-width: 768px) {
    
    
    
    
  }
`;


export const Img = styled.img`
  width: ${({ widthSet }) => (widthSet ? "100%" : "50%")};

  margin: 0 0 10px 0;
  padding: 0;
`;
