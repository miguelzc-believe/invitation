import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import SliderVintage from "./sliderVintage";

const gallery: React.FC = () => {
  return (
    <Grid2
      sx={{
        width: "100%",
        height: "95vh", // Reducir la altura del contenedor padre
        backgroundImage: "url('fondo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      gap={1}
      container
      justifyContent={"center"}
    >
      <Grid2>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "Great Vibes, cursive",
            fontSize: { xs: "60px", sm: "35px", md: "40px" },
            fontWeight: "normal",
            marginTop: { xs: "-4rem", sm: "2rem", md: "3rem" },
            position: "absolute",
            top: { xs: "10%", sm: "5%", md: "0" },
            left: "50%",
            transform: "translateX(-50%)",
            color: "#FFFFFF", // Changed color to white
            fontStyle: "italic",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            letterSpacing: "0,9rem",
            animation: "fadeInFromCenter 1s ease-out",
          }}
        >
          {" Galería de fotos "}
        </Typography>
        <style jsx>{`
          @keyframes fadeInFromCenter {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.5);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, 0) scale(1);
            }
          }
        `}</style>
      </Grid2>
      <Grid2
        sx={{
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "7rem", // Adjust this value to move the heart down
          position: "absolute",
          zIndex: 10, // Ensure it is in front of other elements
        }}
      ></Grid2>
      <Grid2
        sx={{
          padding: "1rem",
          marginTop: "5rem",
        }}
      >
        <SliderVintage />
      </Grid2>
    </Grid2>
  );
};

export default gallery;
