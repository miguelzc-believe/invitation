import { AlignVerticalCenter } from "@mui/icons-material";
import { Grid2 } from "@mui/material";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderComponent: React.FC = () => {
  const images = [
    {
      img: "1.jpg",
      txt: "Desde el inicio, Dios fue el centro de esta unión. Un momento especial que marcó el comienzo de un hermoso propósito",
    },
    {
      img: "2.jpg",
      txt: "Una de esas fotos que hablan por sí solas, dejando que el corazón complete la historia",
    },
    {
      img: "3.jpg",
      txt: "El día que dijimos sí a un futuro juntos, marcado por este pequeño gran símbolo de amor",
    },
    {
      img: "4.jpg",
      txt: "En la sencillez de un momento, nuestras miradas dijeron todo lo que las palabras no podían",
    },
    {
      img: "5.jpg",
      txt: "En cada detalle, seguimos construyendo el sueño que pronto será nuestra realidad",
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
            <img
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                margin: "0 auto",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
              {i.txt}
            </h6>
          </Grid2>
        ))}
      </Slider>
    </Grid2>
  );
};

export default SliderComponent;
