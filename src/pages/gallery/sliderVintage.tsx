import { AlignVerticalCenter } from "@mui/icons-material";
import { Grid2 } from "@mui/material";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderVintage: React.FC = () => {
  const images = [
    {
      img: "poli1.jpg",
    },
    {
      img: "poli2.jpg",
    },
    {
      img: "poli3.jpg",
    },
    {
      img: "poli4.jpg",
    },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 8000,
    autoplay: true,
    fade: true,
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Grid2
      justifyContent={"center"}
      alignContent={"center"}
      sx={{ padding: "1rem" }}
    >
      <Slider {...settings}>
        {images.map((i, index) => (
          <Grid2
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              textAlign: "center",
              padding: "1rem",
            }}
            key={index}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "90%", // Increased maxWidth to make images larger but not exceed container
                margin: "0 auto",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                paddingBottom: "15%", // Adjusted padding to maintain aspect ratio
                paddingTop: "5%",
                paddingLeft: "5%",
                paddingRight: "5%",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "0px",
                }}
                src={i.img}
                alt={`${index + 1}`}
              />
            </div>
          </Grid2>
        ))}
      </Slider>
    </Grid2>
  );
};

export default SliderVintage;
