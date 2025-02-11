import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface LocationComponentProps {
  slideActive: boolean;
}

const LocationComponent: FC<LocationComponentProps> = ({
  slideActive,
}: LocationComponentProps) => {
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
          bgcolor: "#F5F5F5", // Cambiado a un tono diferente de blanco
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingY: "1rem",
            }}
          >
            <Image
              src="/ubi.png"
              alt="Centered Image"
              width={100}
              height={100}
              /*  style={{
                filter: "sepia(1) saturate(20000%) hue-rotate(300deg)", // Apply filter to change color tone
              }} */
            />
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
              Ubicación
            </Typography>
            <Image
              src="/zarzal.png"
              alt="Centered Below Text"
              width={250}
              height={250}
              className={slideActive ? "csView" : ""}
              style={{
                padding: "1rem 0px",
              }}
            />

            <Button
              variant="outlined"
              style={{
                fontFamily: "Great Vibes, cursive",
                color: "#8A9A84",
                fontStyle: "italic",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                borderColor: "#8A9A84",
                cursor: "pointer",
                borderRadius: "10px", // Add border radius to round the corners
              }}
              onClick={() =>
                window.open("https://maps.app.goo.gl/UUUU2sw5qTEvVQzu6")
              }
            >
              Jardín de Eventos "EL ZARZAL"
            </Button>
          </Box>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default LocationComponent;
