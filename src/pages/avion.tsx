import * as gsap from "gsap";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface PlaneProps {
  isOpen: boolean;
}

const PlaneImage = styled.img`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  animation: volar 5s linear infinite;
`;

const AnimatedBackground: React.FC<PlaneProps> = ({ isOpen }) => {
  useEffect(() => {
    // Lógica adicional si es necesario
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url('/avionsito.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s",
        opacity: isOpen ? 1 : 0,
        backfaceVisibility: "hidden",
        overflow: "hidden",
      }}
    >
      {/* Resto de tu contenido */}
      <PlaneImage src="avion.png" alt="Avión volando" />
    </div>
  );
};

export default AnimatedBackground;
