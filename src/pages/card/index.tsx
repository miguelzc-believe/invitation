import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

const CardPage = () => {
  const eventDate = new Date("2025-03-22T00:00:00");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = eventDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);
  const airlineName = "DIMELZA & ALAN";

  return (
    <Container
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url('imagena.png')`, // Reemplaza con la ruta de tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid BLUE",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid red",
          borderRadius: "20px",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          id="cabecera"
          sx={{ backgroundColor: "#D8B29A", padding: "20px", width: "100%" }}
        >
          <Typography
            variant="h5"
            align="center"
            color="white"
            sx={{ fontFamily: "Arial Black" }}
          >
            PASE DE ABORDAR
          </Typography>
        </Box>
        <Box
          id="cuerpo"
          sx={{
            bgcolor: "white",
            height: "auto",
            width: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            padding: "43px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Alinea elementos al inicio (arriba)
            justifyContent: "center",
            paddingTop: "20px", // Agrega padding-top al contenedor
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Arial Black",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#593E2F",
            }}
          >
            {airlineName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Abadi",
                color: "#593E2F",
                marginLeft: "-20px", // Desplaza el texto hacia la izquierda
              }}
            >
              AIRLINES
            </Typography>
            <img
              src="/logoavion.png"
              alt="logo avion"
              width={"120px"}
              height={"20px"}
              style={{ marginRight: "-20px" }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "HELVETICA",
              fontSize: "16px",
              letterSpacing: "2px",

              textTransform: "uppercase",
            }}
          >
            CLASE:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'fira code'",
              fontWeight: "bold",
              textAlign: "right",
              paddingLeft: "50px", // Ajusta el espacio a la izquierda
            }}
          >
            NUPCIAL
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "Helvetica" }}>
            ACCESO VIP:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'fira code','courier prime',monospace",
              fontWeight: "bold",
              textAlign: "center",
              // Ajusta el espacio a la izquierda
            }}
          >
            PARA VIVIR JUNTOS
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'fira code','courier prime',monospace",
              fontWeight: "bold",
              textAlign: "center",
              // Ajusta el espacio a la izquierda
            }}
          >
            ESTE MOMENTO INOLVIDABLE
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "Helvetica" }}>
            FECHA:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'fira code','courier prime',monospace",
              fontWeight: "bold",
              paddingLeft: "20px", // Ajusta el espacio a la izquierda
            }}
          >
            22 MARZO 2025
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", fontFamily: "Helvetica", width: "100%" }}
          >
            VÁLIDO HASTA:
          </Typography>
          <Box
            id="countdown"
            sx={{
              display: "flex",
              gap: "10px",
              textAlign: "center",
            }}
          >
            <Box id="dia" sx={{ display: "inline-block" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Franklin Gothic",
                  fontWeight: "bold",
                  color: "#D8B29A",
                }}
              >
                {days}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", color: "#D8B29A" }}
              >
                DIAS
              </Typography>
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                color: "#D8B29A",
              }}
            >
              :
            </Box>
            <Box id="hora" sx={{ display: "inline-block" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Franklin Gothic",
                  fontWeight: "bold",
                  color: "#D8B29A",
                }}
              >
                {hours}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", color: "#D8B29A" }}
              >
                HRS
              </Typography>
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                color: "#D8B29A",
              }}
            >
              :
            </Box>
            <Box id="min" sx={{ display: "inline-block" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Franklin Gothic",
                  fontWeight: "bold",
                  color: "#D8B29A",
                }}
              >
                {minutes}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", color: "#D8B29A" }}
              >
                MINS
              </Typography>
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                color: "#D8B29A",
              }}
            >
              :
            </Box>
            <Box id="seg" sx={{ display: "inline-block" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Franklin Gothic",
                  fontWeight: "bold",
                  color: "#D8B29A",
                }}
              >
                {seconds}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", color: "#D8B29A" }}
              >
                SECS
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1">DESTINO:</Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            JUNTOS HASTA EL
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            FIN
          </Typography>

          <Box
            id="codigodebarras"
            sx={{
              width: "200px",
              height: "50px",
              backgroundColor: "#fff",
              border: "1px solid #000",
              marginTop: "3px",
            }}
          ></Box>
        </Box>
        <Box
          id="pie"
          display={"flex"}
          alignItems={"center"}
          sx={{
            backgroundColor: "#D8B29A",
            justifyContent: "center",
            padding: "10px",
            position: "absolute",
            bottom: "0px",
            width: "100%",
          }}
        >
          <Button variant="contained" color="primary">
            CONFIRMA ASISTENCIA
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CardPage;
