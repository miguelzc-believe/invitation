import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { FC } from "react";

interface CodeWearProps {
  slideActive: boolean;
}

const CodeWear: FC<CodeWearProps> = ({ slideActive }) => {
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
              bgcolor: "#F5F3E7",
              borderRadius: "20px",
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
              {"Código de Vestimenta"}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: "Great Vibes, cursive",
                color: "#8A9A84",
                whiteSpace: "nowrap",
                fontStyle: "italic",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                letterSpacing: "0.05em",
              }}
            >
              {"Semi Formal"}
            </Typography>
            <Grid2
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                marginY: "1rem",
                width: "100%",
                gap: "20px",
              }}
            >
              <Grid2
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="novio.png"
                  alt="Left Image"
                  className={slideActive ? "csViewRight" : ""}
                  sx={{
                    width: {
                      xs: "50%",
                      md: "30%",
                    },
                    textAlign: "center",
                    height: "auto",
                    borderRadius: "50%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Grid2>
              <Grid2
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="novia.png"
                  alt="Right Image"
                  className={slideActive ? "csViewLeft" : ""}
                  sx={{
                    width: {
                      xs: "50%",
                      md: "30%",
                    },
                    textAlign: "center",
                    height: "auto",
                    borderRadius: "50%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Grid2>
            </Grid2>
            <Box
              sx={{
                bgcolor: "#F8F9F5",
                padding: "rem",
                borderRadius: "8px",
                boxShadow: 5,
                textAlign: "center",
                border: "2px solid #CAD1C4",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Great Vibes, cursive",
                  fontSize: { xs: "20px", sm: "18px", md: "20px" },
                  color: "#8A9A84",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {
                  "El blanco y los colores claros se reservan para el uso exclusivo de la novia"
                }
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default CodeWear;
