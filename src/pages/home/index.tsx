import { Container } from "@mui/material";
import CardComponent from "../components/CardComponent";
import DetailsComponent from "../components/DetailsComponent";
import Section from "../components/Section";
import { useEffect, useState } from "react";
import VideoPage from "../components/VideoPage";
import CodeWear from "../components/CodeWearComponent";
import GalleryComponent from "../components/GalleryComponent";
import HistoryComponent from "../components/HistoryComponent";
import InstagramComponent from "../components/InstagramComponent";
import LocationComponent from "../components/LocationComponent";

const HomePage = () => {
  const [sectionActive, setSectionActive] = useState<string>("video-section");
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setSectionActive(section.id);
        window.history.replaceState(null, "", `#${section.id}`);
        console.log(
          `El ID de la sección en el centro de la pantalla es: ${section.id}`
        );
      }
    });
  };

  useEffect(() => {
    window.history.replaceState(null, "", `#${sectionActive}`);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container
      sx={{
        justifySelf: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        marginX: "10px",
        padding: "0px",
        paddingY: {
          xs: "0.5rem",
          md: "1rem",
        },
        rowGap: "10px",
      }}
    >
      <Section id="video-section">
        <VideoPage slideActive={sectionActive === "video-section"} />
      </Section>
      <Section id="cards-section">
        <CardComponent slideActive={sectionActive === "cards-section"} />
      </Section>
      <Section id="details-section">
        <DetailsComponent slideActive={sectionActive === "details-section"} />
      </Section>
      <Section id="location-section">
        <LocationComponent slideActive={sectionActive === "location-section"} />
      </Section>
      <Section id="history-section">
        <HistoryComponent slideActive={sectionActive === "history-section"} />
      </Section>
      <Section id="code-wear-section">
        <CodeWear slideActive={sectionActive === "code-wear-section"} />
      </Section>
      <Section id="instagram-section">
        <InstagramComponent
          slideActive={sectionActive === "instagram-section"}
        />
      </Section>
      <Section id="gallery-section">
        <GalleryComponent slideActive={sectionActive === "gallery-section"} />
      </Section>
    </Container>
  );
};

export default HomePage;
