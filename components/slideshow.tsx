import React, { useState, useEffect } from "react";

const imageUrls = [
  "https://media.discordapp.net/attachments/1120484062553976943/1134490158884991118/AIL4fc84zNlhYmx4YDDxV-LFjvi1BpAR616kTToJSuHq2GEkEoWG4yctuK4D-9nUikU5WtX_EuzA_Q-3GeDDq6u-WUz0YEX5kQ1j5JLs1hoB16wYyaFMBn6V8sZNCKr5l5H5b4S0muwD5KbamWIJ14EKGc1Lgww1024-h683-s-no.png?width=993&height=662",
  "https://media.discordapp.net/attachments/1120484062553976943/1134490159296024618/AIL4fc9BdDiogKZGKqHzdaZukPoTfveZq773f3zWkfDV6ELC8juCp4Zr-hHeK2OuG1wlLtG_O1wU9z0pEiBbo_4Hs5_5_wJOC48ohuzAXFKNfd6TqOzcbcA9rdVYJ0oFwnjo3I6Z7A4NhM6YrA07k5-PlJ9OJgw1024-h683-s-no.png?width=993&height=662",
  "https://media.discordapp.net/attachments/1120484062553976943/1134490159702884432/73135809_10158350680794381_2081255991030054912_o.jpg?width=993&height=662",
  "https://media.discordapp.net/attachments/1120484062553976943/1134490159962919005/74350725_10158350679144381_6989133073132552192_o.jpg?width=993&height=662",
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "200px", 
        maxHeight: "500px", 
        margin: "0 auto",
      }}
    >
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Slideshow ${currentImageIndex}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={goToPrevImage} style={buttonStyles}>
          Previous
        </button>
        <button
          onClick={goToNextImage}
          style={{ ...buttonStyles, marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const buttonStyles = {
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  border: "none",
  cursor: "pointer",
  outline: "none",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.2s ease",
};

export default Slideshow;
