import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px; 
  margin-top: 32px; 
`;

const YoutubeVideo = ({ videoId }) => {
  return (
    <VideoContainer>
      <iframe
        width="100%"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </VideoContainer>
  );
};

export default YoutubeVideo;
