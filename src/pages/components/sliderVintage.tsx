import { Grid2 } from "@mui/material";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ImageProps {
  img: string;
  text: string;
}
interface SliderVintageProps {
  images: ImageProps[];
}
const SliderVintage: React.FC<SliderVintageProps> = ({ images }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    fade: true,
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  return (
    <Grid2
      sx={{
        textAlign: "center",
        padding: "0rem",
        margin: "1rem",
      }}
    >
      <Slider {...settings} className="csSliderVintage">
        {images &&
          images.length > 0 &&
          images.map((i, index) => (
            <Grid2
              container
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                textAlign: "center",
                padding: "0rem",
                margin: "0rem",
              }}
              key={index}
            >
              <img
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "0px",
                  objectFit: "cover",
                  objectPosition: "center",
                  margin: "0rem",
                  padding: "0rem",
                }}
                src={i.img}
                alt={`${index + 1}`}
              />
              <h6
                style={{
                  color: "#4a5a3f",
                  fontSize: "1rem",
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: "normal",
                  marginTop: "1rem",
                  lineHeight: "1.5",
                }}
              >
                {i.text}
              </h6>
            </Grid2>
          ))}
      </Slider>
    </Grid2>
  );
};

export default SliderVintage;
