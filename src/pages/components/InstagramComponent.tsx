import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface InstagramComponentProps {
  slideActive: boolean;
}

const InstagramComponent: FC<InstagramComponentProps> = ({
  slideActive,
}: InstagramComponentProps) => {
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
          padding: "1rem",
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
              Comparte con Nosotros
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxHeight: "200px",
              }}
              className={slideActive ? "csView" : ""}
            >
              <Image
                src="/camarita.png"
                alt="Instagram Image"
                width={400}
                height={400}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>

            <Typography
              variant="h4"
              className={slideActive ? "csViewLeft" : ""}
              sx={{
                color: "#8A9A84",
                fontStyle: "italic",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }}
            >
              #Dime&Alan
            </Typography>

            <Typography
              variant="h4"
              className={slideActive ? "csViewRight" : ""}
              sx={{
                textAlign: "center",
                color: "white",
                fontSize: "1.5rem", // Adjust the font size as needed
                whiteSpace: "normal",
                textOverflow: "ellipsis",
              }}
            >
              Comparte con nosotros todas tus fotografías del evento, usando el
              siguiente #hashtag en todas tus publicaciones de Facebook e
              Instagram
            </Typography>
          </Box>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default InstagramComponent;
