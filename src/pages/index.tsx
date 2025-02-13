import { FC, useEffect } from "react";
import EnvelopePage from "./components/Envelope";
import { Box } from "@mui/material";

const Home: FC = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "80%",
          lg: "60%",
        },
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifySelf: "center",
        margin: "0px",
        padding: "0px",
      }}
    >
      <EnvelopePage />
    </Box>
  );
};

export default Home;
