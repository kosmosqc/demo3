import React from "react";
import Video from "../../medias/video.mp4";
import {
  MainContainer,
  MainBg,
  MainContent,
  MainH1,
  MainSubtitle,
} from "./MainElements";

const Main = () => {
  return (
    <MainContainer id="home">
      <MainBg>
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={Video} type="video/mp4" />
        </video>
      </MainBg>
      <MainContent>
        <MainH1>Alain Gionet</MainH1>
        <MainSubtitle>Développeur, rêveur, explorateur du code et du cosmos</MainSubtitle>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
