import React from "react";
import Video from "../../medias/video.mp4";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
} from "./MainElements";

const Main = () => {
  return (
    <MainContainer id="home">
      <MainBg>
      <video
  autoPlay
  loop
  muted
  //ref={videoRef}
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
>
  <source src={Video} type="video/mp4" />
</video>
      </MainBg>
      <MainContent>
        <MainH1>Alain Gionet</MainH1>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
