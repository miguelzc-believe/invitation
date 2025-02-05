import { motion, useInView } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { FC, useRef } from "react";
import EnvelopePage from "./envelope/Envelope";

interface SectionProps {
  id: string;
  title: string;
  content: string;
  bgColor: string;
  direction?: "left" | "right";
}

const Section: FC<SectionProps> = ({
  id,
  title,
  content,
  bgColor,
  direction = "left",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animación se repite

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      component={motion.section}
      ref={ref}
      id={id}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
        backgroundColor: bgColor,
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Control manual con isInView
      viewport={{ margin: "100px" }} // Margen para reiniciar la detección
      variants={variants}
    >
      <EnvelopePage />
    </Box>
  );
};

export default Section;
