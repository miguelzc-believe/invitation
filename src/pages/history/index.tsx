import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import SliderComponent from "./slider";

const history: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["1.jpg", "2.jpg", "3.jpg"];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid2
      sx={{
        width: "100%",
        height: "95vh", // Reducir la altura del contenedor padre
        backgroundImage: "url('jardin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      gap={1}
      container
      justifyContent={"center"}
    >
      <Grid2
        sx={{
          minHeight: "88vh",
          width: "calc(100% - 2rem)",
          background:
            "repeating-linear-gradient(45deg, #CAD1C4,rgba(255, 255, 255, 0.4) 10px, #F5F3E7 10px, #F5F3E7 20px)",
          padding: "8px",
          margin: "1rem",
          position: "relative",
        }}
      >
        <Grid2
          container
          direction={"row"}
          justifyContent={"center"}
          alignContent={"start"}
          sx={{ bgcolor: "#F5F3E7", height: "100%" }}
          gap={2}
        >
          <Grid2>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: "Great Vibes, cursive",
                fontSize: { xs: "40px", sm: "10px", md: "10px" },
                fontWeight: "bold",
                transform: "translateX(-1%)",
                color: "#9A848A",
              }}
            >
              {" Nuestra Historia  "}
            </Typography>
          </Grid2>
          <Grid2
            sx={{
              width: "70px",
              height: "70px",
            }}
          >
            <img
              src="corazon.png"
              alt="Nuestra Historia"
              style={{
                width: "70px",
                height: "70px",
              }}
            />
          </Grid2>
          <Grid2
            sx={{
              bgcolor: "#F5F3E7",
            }}
          >
            <SliderComponent />
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default history;
