import { AlignVerticalCenter } from "@mui/icons-material";
import { Grid2 } from "@mui/material";
import React from "react";
import Slider, { Settings } from "react-slick";
const SliderComponent: React.FC = () => {
  const images = [
    {
      img: "1.png",
      txt: "Desde el inicio, Dios fue el centro de esta unión. Un momento especial que marcó el comienzo de un hermoso propósito",
    },
    {
      img: "2.png",
      txt: "Nuestra primera salida, el inicio de momentos simples que se volvieron inolvidables",
    },
    {
      img: "3.png",
      txt: "El día que dijimos sí a un futuro juntos, marcado por este pequeño gran símbolo de amor",
    },
    {
      img: "4.png",
      txt: "En la sencillez de un momento, nuestras miradas dijeron todo lo que las palabras no podían",
    },
    {
      img: "5.png",
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
    arrows: false,
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
            justifyContent={"center"}
            alignContent={"center"}
            sx={{
              textAlign: "center",
            }}
            key={index}
          >
            <img
              style={{
                width: "300px",
                height: "300px",
                margin: "auto",

                backgroundPosition: "cover",
                backgroundRepeat: "round",
              }}
              src={i.img}
              alt={`Slide ${index + 1}`}
            />
            <h6
              style={{
                color: "#7EB48F",
                fontSize: "1rem",
                fontFamily: "Times New Roman",
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
