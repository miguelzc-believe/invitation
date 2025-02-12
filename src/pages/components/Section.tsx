import { forwardRef } from "react";
import { Box } from "@mui/material";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

// Usamos forwardRef para que Section acepte tanto callback refs como ref objects
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children }: SectionProps, ref) => {
    return (
      <Box
        component={motion.section}
        ref={ref}
        id={id}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifySelf: "center",
          margin: "0px",
          paddingX: "0px",
        }}
      >
        {children}
      </Box>
    );
  }
);

export default Section;
