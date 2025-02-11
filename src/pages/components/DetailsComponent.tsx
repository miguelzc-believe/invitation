import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

interface DetailsComponentProps {
  slideActive: boolean;
}

export default function DetailsComponent({
  slideActive = true,
}: DetailsComponentProps) {
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
      <CardHeader
        title={
          <Typography
            variant="subtitle2"
            textAlign={"center"}
            sx={{
              fontFamily: "Abadi",
              color: "white",
              fontWeight: "bold",
            }}
          >
            ¡Nos gustaría mucho que nos acompañaras!
          </Typography>
        }
      />
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
              width: "100%", // Restar el margen del ancho total
              height: "100%", // Restar el margen de la altura total
              bgcolor: "#F5F3E7",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                width: "100%",
                fontFamily: "Great Vibes, cursive",
                fontWeight: "bold",
                color: "#8A9A84",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                overflowWrap: "break-word",
              }}
            >
              {"Itinerario"}
            </Typography>

            <Timeline
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              {[
                { time: "10:30", img: "anillo.png", text: "Ceremonia" },
                {
                  time: "12:00",
                  img: "copas.png",
                  text: "Coctel de bienvenida",
                },
                { time: "14:00", img: "almuerzo.png", text: "Almuerzo" },
                {
                  time: "15:30",
                  img: "fotos.png",
                  text: "Fotografias mesa dulce",
                },
                { time: "16:30", img: "show.png", text: "Show cooking" },
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
                    <Stack
                      className={slideActive ? "csViewLeft" : ""}
                      direction={"row"}
                      justifyContent={"space-evenly"}
                      alignItems={"center"}
                    >
                      <img
                        src={event.img}
                        alt={`Imagen${index + 1}`}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "scale-down",
                          marginRight: "10px",
                        }}
                      />
                      {event.time}
                    </Stack>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: "#8A9A84" }} />
                    {index < 6 && (
                      <TimelineConnector sx={{ bgcolor: "#8A9A84" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent
                    className={slideActive ? "csViewRight" : ""}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        width: "100%",
                        color: "#8A9A84",
                        textAlign: "right",
                        fontSize: "15px",
                        textTransform: "capitalize",
                      }}
                    >
                      {event.text}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Grid2>
      </CardContent>
    </Card>
  );
}
