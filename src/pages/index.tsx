import { useState } from "react";
import { Box, Button } from "@mui/material";
import BouncingButton from "./estilo";
import styled from "styled-components";
import * as React from "react";
import { myFunction } from "./utils";
import AnimatedBackground from "./avion";

const MyComponent = () => {
  const result = myFunction(10);
  return <div>{result}</div>;
};

const CenteredBouncingButton = styled(BouncingButton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EnvelopePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5dc",
      }}
    >
      {/* Sobre */}
      <Box
        sx={{
          position: "relative",
          width: "100%", // Asegúrate de que el contenedor padre tenga suficiente ancho
          maxWidth: isOpen ? "100%" : "500px",
          height: "100vh",
          backgroundColor: "#8b4513", // Color café oscuro          border: "2px solid #8b5e3c",
          backgroundImage: "url('textura.png')", // Textura vintage
          backgroundSize: "cover",
          borderRadius: "5px",
          overflow: "hidden", // Si el contenido del sobre es más grande, asegúrate de que no se oculte
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          transformOrigin: "left",
          transition: "transform 1.5s",
        }}
      >
        {/* Tapa del sobre */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "70%",
            height: "100%",
            backgroundColor: "#8b4513", // Color café oscuro
            backgroundImage: "url('textura.png')", // Textura vintage
            filter: "brightness(80%)", // Ajusta este valor para oscurecer
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            transformStyle: "preserve-3d",
            transform: isOpen ? "rotateY(-180deg)" : "rotateY(0)",
            transformOrigin: "left center",
            transition: "transform 1.5s, clip-path 1.5s", // Agrega una transición al clip-path
            zIndex: 2, // Asigna un z-index a la tapa
          }}
        />

        {/* Contenido interno */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('/imagena.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.5s",
            opacity: isOpen ? 1 : 0,
            backfaceVisibility: "hidden",
          }}
        >
          <AnimatedBackground isOpen={true} />
          <Box
            sx={{
              position: "absolute",
              top: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "Elephant",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#593E2F",
              textTransform: "uppercase",
            }}
          >
            PASAPORTE
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "180px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "Monotype Corsiva",
              fontSize: "30px",
              fontStyle: "italic",
              color: "#593E2F",
            }}
          >
            A nuestra boda
          </Box>
          <img
            src="centro.png" // Reemplaza con la ruta correcta
            alt="Imagen debajo del texto"
            style={{
              position: "absolute",
              top: "270px", // Ajusta la posición vertical según sea necesario
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px", // Ajusta el tamaño de la imagen
              height: "200px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "490px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "Monotype Corsiva",
              fontSize: "30px",
              fontStyle: "italic",
              color: "#593E2F",
            }}
          >
            Únete al viaje
          </Box>
        </Box>
        {/* Sello central */}

        {!isOpen && (
          <BouncingButton onClick={handleOpen}>
            <img
              src="logo.png" // Replace with the actual path to your image
              alt="Button Image"
              style={{
                width: "300px",
                height: "300px",
              }}
            />
          </BouncingButton>
        )}
        {isOpen && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ marginTop: "20px" }}
          >
            Cerrar Sobre
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default EnvelopePage;
