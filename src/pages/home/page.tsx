// src/pages/index.tsx
import { Box, Typography, Button, Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          ¡Bienvenido a mi página estática!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Este es un sitio web construido con Next.js, Material-UI y TypeScript.
        </Typography>
        <Button variant="contained" color="primary">
          Aprende más
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
