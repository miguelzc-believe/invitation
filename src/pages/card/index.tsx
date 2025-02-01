import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

import * as QRCode from "qrcode.react";
import QRButton from "./qr";
import { px } from "framer-motion";

const CardPage = () => {
  const eventDate = new Date("2025-03-22T00:00:00");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [showQR, setShowQR] = useState(false);

  const handleButtonClick = () => {
    setShowQR(!showQR);
  };

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
        minHeight: "100vh",
        backgroundColor: "#E0E0E0", // Color de fondo que combina con la paleta de colores
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          id="cabecera"
          sx={{
            backgroundColor: "#CAD1C4",
            padding: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "3px solid #A36548",
          }}
        >
          <Typography
            fontSize="16px"
            align="center"
            color="#593E2F"
            sx={{
              fontFamily: "Arial Black",
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "10px 0",
              borderBottom: "2px solid #A36548",
            }}
          >
            Boarding Pass | Pase de Abordo
          </Typography>
        </Box>

        <Box
          id="cuerpo"
          sx={{
            bgcolor: "#F5F5F5", // Cambiado a un tono diferente de blanco
            height: "auto",
            width: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Alinea elementos al inicio (arriba)
            justifyContent: "center",
            paddingTop: "10px", // Agrega padding-top al contenedor
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Arial Black",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#A36548",
              display: "block", // Asegura que el texto esté en su propia línea
              textAlign: "center", // Centra el texto
              margin: "20px 0", // Agrega margen superior e inferior
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
                color: "#A36548",
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
              className="csSlideRight"
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "HELVETICA",
              fontSize: "16px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#A36548",
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
              color: "#A9B0A3",
            }}
          >
            NUPCIAL
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Abadi",
              color: "#A36548",
              marginLeft: "-20px", // Desplaza el texto hacia la izquierda
            }}
          >
            ACCESO VIP:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'fira code','courier prime',monospace",
              fontWeight: "bold",
              textAlign: "center",
              // Ajusta el espacio a la izquierda
              color: "#A9B0A3",
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
              color: "#A9B0A3",
            }}
          >
            ESTE MOMENTO INOLVIDABLE
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Helvetica", color: "#A36548" }}
          >
            FECHA:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'fira code','courier prime',monospace",
              fontWeight: "bold",
              paddingLeft: "20px", // Ajusta el espacio a la izquierda
              color: "#A9B0A3",
            }}
          >
            22 MARZO 2025
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontFamily: "Arial Black",
              fontWeight: "bold",
              width: "100%",
              color: "#A36548",
            }}
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
                  color: "#A9B0A3",
                }}
              >
                {days}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  color: "#A36548",
                }}
              >
                DIAS
              </Typography>
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                color: "#A9B0A3",
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
                  color: "#A9B0A3",
                }}
              >
                {hours}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  color: "#A36548",
                }}
              >
                HRS
              </Typography>
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                color: "#A9B0A3",
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
                  color: "#A9B0A3",
                }}
              >
                {minutes}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  color: "#A36548",
                }}
              >
                MINS
              </Typography>
            </Box>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                color: "#A9B0A3",
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
                  color: "#A9B0A3", // Tono más oscuro
                }}
              >
                {seconds}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  color: "#A36548",
                }}
              >
                SECS
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ color: "#A36548" }}>
            DESTINO:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
              color: "#A9B0A3",
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
              color: "#A9B0A3",
            }}
          >
            FIN
          </Typography>
          <Image
            id="codigo"
            src="/codigo.png" // Reemplaza con la ruta correcta de tu imagen
            alt="Código de barras"
            width={200}
            height={70}
            layout="fixed"
            style={{
              marginTop: "-10px",
              marginLeft: "20px",
              marginRight: "auto",
            }} // Ajusta el margen superior para subir la imagen y centrarla horizontalmente
          />
        </Box>
        <Box
          id="pie"
          display={"flex"}
          alignItems={"center"}
          sx={{
            backgroundColor: "#CAD1C4",
            justifyContent: "center",
            padding: "10px",
            position: "absolute",
            bottom: "0px",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              handleButtonClick();
            }}
            sx={{
              backgroundColor: "#ffffff",
              color: "#593E2F",
              fontFamily: "Imprint MT Shadow",
              marginTop: "-5px",
              padding: "8px 20px",
              borderRadius: "30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s, transform 0.3s",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "translateY(-2px)",
              },
            }}
          >
            CONFIRMA ASISTENCIA
          </Button>
        </Box>
      </Box>

      {showQR && <QRButton qrValue="hola andy" />}
    </Container>
  );
};

export default CardPage;
