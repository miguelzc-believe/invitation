import { Box, Container, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const Detalles: React.FC = () => {
  return (
    <Grid2
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: "url('jardin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid #F5F3E7",
      }}
      gap={1}
      container
      justifyContent={"center"}
    >
      <Grid2
        sx={{
          width: "100%",
          height: "10%",
          bgcolor: "#CAD1C4",
        }}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          sx={{
            fontFamily: "Abadi",
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "20px", sm: "16px", md: "20px" },
          }}
        >
          ¡Nos gustaria mucho que nos acompañaras!
        </Typography>
      </Grid2>
      <Grid2
        sx={{
          minHeight: "100vh", // Restar el 20% de la altura total
          width: "100%", // Restar el margen del ancho total
          background:
            "repeating-linear-gradient(45deg, #CAD1C4,rgba(255, 255, 255, 0.4) 10px, #F5F3E7 10px, #F5F3E7 20px)",
          padding: "1rem",
          marginX: "1rem",
          marginBottom: "1rem",
          position: "relative",
          // Bajar más abajo
        }}
      >
        <Box
          sx={{
            width: "100%", // Restar el margen del ancho total
            height: "100%", // Restar el margen de la altura total
            bgcolor: "#F5F3E7",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontFamily: "Great Vibes, cursive",
              fontSize: { xs: "30px", sm: "25px", md: "30px" }, // Ajustar tamaño de letra para diferentes pantallas
              fontWeight: "bold",
              marginTop: { xs: "-2rem", sm: "2rem", md: "3rem" }, // Ajustar margen superior para diferentes pantallas
              position: "absolute",
              top: { xs: "10%", sm: "5%", md: "0" }, // Ajustar posición superior para diferentes pantallas
              left: "50%",
              transform: "translateX(-50%)",
              color: "#8A9A84", // Un verde oscuro
            }}
          >
            {" Itinerario "}
          </Typography>

          <Timeline
            sx={{
              position: "absolute",
              top: { xs: "10%", sm: "25%", md: "20%" },
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              color: "#8A9A84", // Color del texto
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{
                  color: "#8A9A84",
                  textAlign: "left",
                  fontSize: "15px",
                }}
              >
                <Stack direction={"column"}>
                  10:30
                  <img
                    src="anillo.png"
                    alt="Imagen1"
                    style={{
                      width: "56px",
                      height: "50px",
                      marginTop: "5px",
                      marginLeft: "-9px",
                    }}
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#8A9A84" }} />
                <TimelineConnector sx={{ bgcolor: "#8A9A84" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  color: "#8A9A84",
                  textAlign: "Right",
                  fontSize: "15px",
                }}
              >
                Ceremonia
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{ color: "#8A9A84", textAlign: "left", fontSize: "15px" }}
              >
                <Stack direction={"column"}>
                  12:00
                  <img
                    src="copas.png"
                    alt="Imagen1"
                    style={{
                      width: "56px",
                      height: "50px",
                      marginTop: "5px",
                      marginLeft: "-9px",
                    }}
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#8A9A84" }} />
                <TimelineConnector sx={{ bgcolor: "#8A9A84" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  color: "#8A9A84",
                  textAlign: "Right",
                  fontSize: "15px",
                }}
              >
                Coctel de bienvenida
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{ color: "#8A9A84", textAlign: "left", fontSize: "15px" }}
              >
                <Stack direction={"column"}>
                  14:00
                  <img
                    src="almuerzo.png"
                    alt="Imagen1"
                    style={{
                      width: "56px",
                      height: "50px",
                      marginTop: "5px",
                      marginLeft: "-9px",
                    }}
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#8A9A84" }} />
                <TimelineConnector sx={{ bgcolor: "#8A9A84" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  color: "#8A9A84",
                  textAlign: "Right",
                  fontSize: "15px",
                }}
              >
                Almuerzo
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{ color: "#8A9A84", textAlign: "left", fontSize: "15px" }}
              >
                <Stack direction={"column"}>
                  15:30
                  <img
                    src="fotos.png"
                    alt="Imagen1"
                    style={{
                      width: "60px",
                      height: "50px",
                      marginTop: "5px",
                      marginLeft: "-9px",
                    }}
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#8A9A84" }} />
                <TimelineConnector sx={{ bgcolor: "#8A9A84" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{ color: "#8A9A84", textAlign: "Right", fontSize: "15px" }}
              >
                Fotografias mesa dulce
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{ color: "#8A9A84", textAlign: "left", fontSize: "15px" }}
              >
                <Stack direction={"column"}>
                  16:30
                  <img
                    src="show.png"
                    alt="Imagen1"
                    style={{
                      width: "56px",
                      height: "50px",
                      marginTop: "5px",
                      marginLeft: "-9px",
                    }}
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#8A9A84" }} />
                <TimelineConnector sx={{ bgcolor: "#8A9A84" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{ color: "#8A9A84", textAlign: "Right", fontSize: "15px" }}
              >
                SHOW cooking
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{ color: "#8A9A84", textAlign: "left", fontSize: "15px" }}
              >
                <Stack direction={"column"}>
                  17:30
                  <img
                    src="torta.png"
                    alt="Imagen1"
                    style={{
                      width: "56px",
                      height: "50px",
                      marginTop: "5px",
                      marginLeft: "-9px",
                    }}
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#8A9A84" }} />
                <TimelineConnector sx={{ bgcolor: "#8A9A84" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{ color: "#8A9A84", textAlign: "Right", fontSize: "15px" }}
              >
                Pastel y Bouquet
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{ color: "#8A9A84", textAlign: "left", fontSize: "15px" }}
              >
                <Stack direction={"column"}>
                  18:00
                  <img
                    src="auto.png"
                    alt="Imagen1"
                    style={{
                      width: "56px",
                      height: "50px",
                      marginTop: "5px",
                      marginLeft: "-9px",
                    }}
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#8A9A84" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{ color: "#8A9A84", textAlign: "Right", fontSize: "15px" }}
              >
                Despedida
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Detalles;
