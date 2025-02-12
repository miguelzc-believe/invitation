import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";

import SliderVintage, { ImageProps } from "./sliderVintage";
import { FC } from "react";

interface HistoryComponentProps {
  slideActive: boolean;
}

const HistoryComponent: FC<HistoryComponentProps> = ({
  slideActive,
}: HistoryComponentProps) => {
  const images: ImageProps[] = [
    {
      img: "1.jpg",
      text: "Desde el inicio, Dios fue el centro de esta unión. Un momento especial que marcó el comienzo de un hermoso propósito",
    },
    {
      img: "2.jpg",
      text: "Una de esas fotos que hablan por sí solas, dejando que el corazón complete la historia",
    },
    {
      img: "3.jpg",
      text: "El día que dijimos sí a un futuro juntos, marcado por este pequeño gran símbolo de amor",
    },
    {
      img: "4.jpg",
      text: "En la sencillez de un momento, nuestras miradas dijeron todo lo que las palabras no podían",
    },
    {
      img: "5.jpg",
      text: "En cada detalle, seguimos construyendo el sueño que pronto será nuestra realidad",
    },
  ];
  return (
    <Card
      sx={{
        backgroundColor: "#CAD1C4",
        width: {
          xs: "100%",
          sm: "70%",
          md: "60%",
        },
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent
        sx={{
          backgroundColor: "#CAD1C4",
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundImage: "url('jardin.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid2
          sx={{
            width: "100%",
            height: "100%",
            background:
              "repeating-linear-gradient(45deg, #CAD1C4,rgba(255, 255, 255, 0.4) 10px, #F5F3E7 10px, #F5F3E7 20px)",
            padding: "1rem",
            position: "relative",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#CAD1C4",
              borderRadius: "20px",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontFamily: "Great Vibes, cursive",
                color: "#8A9A84",
                fontStyle: "italic",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                letterSpacing: "0em",
              }}
            >
              {" Nuestra Historia "}
            </Typography>

            <SliderVintage images={images} />
          </Box>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default HistoryComponent;
