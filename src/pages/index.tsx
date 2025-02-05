import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC } from "react";
import Section from "./components/Section";
import EnvelopePage from "./components/envelope/Envelope";

const Home: FC = () => {
  return (
    <>
      <Section
        id={"envelope"}
        bgColor="red"
        direction="left"
        key={"envelope"}
        content="s"
        title="11"
      />
    </>
  );
};

export default Home;
