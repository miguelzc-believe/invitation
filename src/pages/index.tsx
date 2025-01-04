import { useState } from "react";
import { Box, Button } from "@mui/material";

const EnvelopePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
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
          width: "100%",
          maxWidth: isOpen ? "100%" : "500px",
          height: "100vh",
          backgroundColor: "#d2b48c",
          border: "2px solid #8b5e3c",
          borderRadius: "5px",
          overflow: "hidden",
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
            backgroundColor: "#8b5e3c",
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            transformStyle: "preserve-3d",
            transform: isOpen ? "rotateY(-180deg)" : "rotateY(0)",
            transformOrigin: "left center",
            transition: "transform 1.5s",
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
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.5s",
            opacity: isOpen ? 1 : 0,
            backfaceVisibility: "hidden",
          }}
        >
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#8b5e3c",
            }}
          >
            ¡Hola, Bienvenido!
          </Box>
        </Box>

        {/* Sello central */}
        <Box
          sx={{
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translateY(50%)",
            width: "100px",
            height: "100px",
            backgroundColor: "#8b0000",
            borderRadius: "50%",
            display: isOpen ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            zIndex: isOpen ? -1 : 10,
          }}
          onClick={handleOpen}
        >
          <Box
            sx={{
              fontSize: "14px",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              display: isOpen ? "none" : "flex",
            }}
          >
            Click
          </Box>
        </Box>
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
