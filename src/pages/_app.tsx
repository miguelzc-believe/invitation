// src/pages/_app.tsx
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MusicPlayer from "./components/MusicPlayer";
import { GlobalStateProvider } from "./components/GlobalState";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStateProvider>
        <Component {...pageProps} />
      </GlobalStateProvider>
    </ThemeProvider>
  );
};

export default MyApp;
