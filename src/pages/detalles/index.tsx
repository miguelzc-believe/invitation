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
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Great Vibes, cursive",
              fontSize: { xs: "40px", sm: "36px", md: "40px" },
              fontWeight: "bold",
              marginTop: { xs: "-1rem", sm: "2rem", md: "3rem" },
              position: "absolute",
              top: { xs: "5%", sm: "4%", md: "3%" },
              left: "50%",
              transform: "translateX(-50%)",
              color: "#8A9A84",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              maxWidth: "90%",
              overflowWrap: "break-word",
            }}
          >
            {"Itinerario"}
          </Typography>

          <Timeline
            sx={{
              position: "absolute",
              top: { xs: "10%", sm: "25%", md: "20%" },
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              color: "#8A9A84",
            }}
          >
            {[
              { time: "10:30", img: "anillo.png", text: "Ceremonia" },
              { time: "12:00", img: "copas.png", text: "Coctel de bienvenida" },
              { time: "14:00", img: "almuerzo.png", text: "Almuerzo" },
              {
                time: "15:30",
                img: "fotos.png",
                text: "Fotografias mesa dulce",
              },
              { time: "16:30", img: "show.png", text: "SHOW cooking" },
              { time: "17:30", img: "torta.png", text: "Pastel y Bouquet" },
              { time: "18:00", img: "auto.png", text: "Despedida" },
            ].map((event, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{
                    color: "#8A9A84",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  <Stack direction={"column"}>
                    {event.time}
                    <img
                      src={event.img}
                      alt={`Imagen${index + 1}`}
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
                  {index < 6 && (
                    <TimelineConnector sx={{ bgcolor: "#8A9A84" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    color: "#8A9A84",
                    textAlign: "right",
                    fontSize: "15px",
                  }}
                >
                  {event.text}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Detalles;
