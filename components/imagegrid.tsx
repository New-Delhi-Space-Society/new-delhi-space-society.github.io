import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: auto;
`;

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <GridContainer>
      {images.map((image, index) => (
        <GridImage src={image} alt={`Image ${index}`} key={index} />
      ))}
    </GridContainer>
  );
};

export default ImageGrid; 
