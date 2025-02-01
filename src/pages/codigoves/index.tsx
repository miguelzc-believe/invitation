import { HolidayVillage } from "@mui/icons-material";
import Grid from "@mui/material/Grid"; // Grid is the stable material module
import { Box, Typography } from "@mui/material";

const codigoves: React.FC = () => {
  const hola = (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('jardin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      gap={1}
      container
      justifyContent={"center"}
    >
      <Grid
        sx={{
          minHeight: "91vh",
          width: "calc(100% - 2rem)",
          background:
            "repeating-linear-gradient(45deg, #CAD1C4,rgba(255, 255, 255, 0.4) 10px, #F5F3E7 10px, #F5F3E7 20px)",
          padding: "8PX",
          margin: "1rem",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#F5F3E7",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Great Vibes, cursive",
              fontSize: { xs: "40px", sm: "35px", md: "40px" },
              fontWeight: "normal",
              marginTop: { xs: "-2rem", sm: "2rem", md: "3rem" },
              position: "absolute",
              top: { xs: "10%", sm: "5%", md: "0" },
              left: "50%",
              transform: "translateX(-50%)",
              color: "#8A9A84",

              fontStyle: "italic",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              letterSpacing: "0em",
            }}
          >
            {"Código de Vestimenta"}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontFamily: "Great Vibes, cursive",
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              fontWeight: "normal",
              marginTop: { xs: "1rem", sm: "3rem", md: "4rem" },
              position: "absolute",
              top: { xs: "20%", sm: "15%", md: "10%" },
              left: "50%",
              transform: "translateX(-50%)",
              color: "#8A9A84",
              whiteSpace: "nowrap",
              fontStyle: "italic",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              letterSpacing: "0.05em",
            }}
          >
            {"Semi Formal"}
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{
              position: "absolute",
              top: { xs: "30%", sm: "25%", md: "20%" },
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
            }}
          >
            <Grid item xs={5}>
              <Box
                component="img"
                src="novio.png"
                alt="Left Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <Box
                component="img"
                src="novia.png"
                alt="Right Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "25%", sm: "10%", md: "5%" },
              left: "50%",
              transform: "translateX(-50%)",
              bgcolor: "#F8F9F5",
              padding: "rem",
              borderRadius: "8px",
              boxShadow: 5,
              textAlign: "center",
              width: { xs: "80%", sm: "70%", md: "60%" },
              border: "2px solid #CAD1C4",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Great Vibes, cursive",
                fontSize: { xs: "20px", sm: "18px", md: "20px" },
                color: "#8A9A84",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              {
                "El blanco y los colores claros se reservan para el uso exclusivo de la novia"
              }
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
  return <div>{hola}</div>;
};

export default codigoves;
