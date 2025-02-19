import { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router"; // Importamos el hook para manejar el estado global
import { useGlobalState } from "../context/GlobalState";

const EnvelopePage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { setIsPlaying } = useGlobalState(); // Obtenemos la función para actualizar el estado global

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true); // Cambiamos el estado global para iniciar la canción
    setTimeout(() => {
      router.push("/home");
    }, 2500);
  };

  return (
    <>
      <Box
        id="envelope-cover"
        sx={{
          position: "absolute",
          width: {
            xs: "100%",
            md: "60%",
            lg: "40%",
          },
          height: "100%",
          backgroundColor: "#F5F3E7",
          backgroundImage: "url('fondo.png')", // Textura vintage
          filter: "brightness(96%)", // Ajusta este valor para oscurecer
          clipPath: "polygon(0 0, 60% 50%, 0 100%)",
          animation: isOpen ? "moveAndFadeLeft 3.5s ease-in-out 1" : "",
          zIndex: 3,
          overflow: "hidden",
          borderRadius: "10px",
        }}
      />
      {/* Sobre */}
      <Box
        id="envelope"
        sx={{
          position: "absolute",
          width: {
            xs: "100%",
            md: "60%",
            lg: "40%",
          },
          height: "100%",
          backgroundImage: "url('fondo.png')", // Textura vintage
          backgroundSize: "cover",
          animation: isOpen ? "moveAndFadeRight 3.5s ease-in-out 1" : "",
          zIndex: 2,
          boxShadow: "10px 10px 10px rgba(128, 128, 128, 0.5)",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <Box
          id="envelope-cover-1"
          sx={{
            width: {
              xs: "100%",
              md: "60%",
              lg: "40%",
            },
            height: "100%",
            backgroundColor: "#F5F3E7",
            clipPath: "polygon(0 0, 60% 50%, 0 100%)",
            zIndex: 2,
          }}
        />
      </Box>

      <a
        id="envelope-a"
        className="cslatir"
        onClick={handleOpen}
        style={{
          width: "auto",
          height: "auto",
          zIndex: 4,
        }}
      >
        <Image
          className={isOpen ? "csFadeImage" : ""}
          src="/nuevo.png"
          alt="Button Image"
          width={250}
          height={250}
          loading="lazy"
        />
      </a>
    </>
  );
};

export default EnvelopePage;
