import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const instagram: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: "url('jardin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid #F5F3E7",
      }}
    >
      <Grid
        item
        sx={{
          minHeight: "700px", // Restar el 20% de la altura total
          width: "100%", // Restar el margen del ancho total
          background:
            "repeating-linear-gradient(45deg, #CAD1C4,rgba(255, 255, 255, 0.4) 10px, #F5F3E7 10px, #F5F3E7 20px)",
          padding: "1rem",
          marginX: "1rem",
          marginBottom: "1rem",
          // Bajar más abajo
        }}
      >
        <Box
          sx={{
            width: "100%", // Restar el margen del ancho total
            height: "100%", // Restar el margen de la altura total
            bgcolor: "#CAD1C4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%", // Ajustar para mover el texto un poco más arriba
              transform: "translateY(-50%)",
              textAlign: "center",
              color: "white",
              fontSize: "50PX", // Aumentar el tamaño de la letra
              fontFamily: "Great Vibes, cursive",
              fontStyle: "italic", // Hacer la letra más inclinada
              animation: "slideDown 2s ease-out", // Añadir animación
            }}
          >
            Comparte con Nosotros
          </Box>
          <style>
            {`
              @keyframes slideDown {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(-50%); }
              }
            `}
          </style>
          <img
            src="camarita.png"
            alt="Instagram Image"
            style={{
              position: "absolute",
              top: "30%", // Adjust to position the image correctly
              transform: "translateY(-50%)",
              maxWidth: "100%",
              maxHeight: "100%",
              animation: "cameraAnimation 2s infinite",
            }}
          />
          <style>
            {`
              @keyframes cameraAnimation {
                0% { transform: translateY(-50%) scale(1); }
                50% { transform: translateY(-50%) scale(1.1); }
                100% { transform: translateY(-50%) scale(1); }
              }
            `}
          </style>
          <Box
            sx={{
              position: "absolute",
              top: "46%", // Adjust to position the text correctly
              transform: "translateY(-50%)",
              textAlign: "center",
              color: "white",
              fontSize: "40px", // Adjust the font size as needed
              fontFamily: "Arial, sans-serif",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              animation: "slideInFromLeft 2s ease-out", // Add animation
            }}
          >
            #Dime&Alan
          </Box>
          <style>
            {`
              @keyframes slideInFromLeft {
                0% { transform: translateX(-110%); }
                110% { transform: translateX(0); }
              }
            `}
          </style>
          <Box
            sx={{
              position: "absolute",
              top: "70%", // Adjust to position the text correctly
              transform: "translateY(-50%)",
              textAlign: "center",
              color: "white",
              fontSize: "1.5rem", // Adjust the font size as needed
              fontFamily: "Arial, sans-serif", // Simple and professional font
              whiteSpace: "normal",
              overflow: "hidden",
              textOverflow: "ellipsis",
              padding: "0 1rem", // Add padding for better readability
              animation: "slideUp 2s ease-out", // Add slide up animation
            }}
          >
            Comparte con nosotros todas tus fotografías del evento, usando el
            siguiente #hashtag en todas tus publicaciones de Facebook e
            Instagram
          </Box>
          <style>
            {`
              @keyframes slideUp {
                0% { transform: translateY(100%); }
                100% { transform: translateY(-50%); }
              }
            `}
          </style>
        </Box>
      </Grid>
    </Grid>
  );
};

export default instagram;
