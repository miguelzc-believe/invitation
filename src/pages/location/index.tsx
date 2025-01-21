import { Container, Typography } from "@mui/material";

const Location: React.FC = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        backgroundImage: 'url("verde.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <img
        src="ubi.png"
        alt="Centered Image"
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%", // Adjust the width to make the image smaller
          maxWidth: "100px", // Set a maximum width
          filter: "sepia(1) saturate(20000%) hue-rotate(300deg)", // Apply filter to change color tone
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: "120px", // Adjust the top position as needed
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Great Vibes', cursive",
          fontSize: "60px", // Adjust the font size as needed
          color: "#A36548", // Set the text color
        }}
      >
        Ubicación
      </Typography>
      <img
        src="zarzal.png"
        alt="Centered Below Text"
        style={{
          position: "absolute",
          top: "200px", // Adjust the top position as needed
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%", // Adjust the width to make the image smaller
          maxWidth: "250px", // Set a maximum width
        }}
      />
      <button
        style={{
          position: "absolute",
          top: "500px", // Adjust the top position as needed
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          color: "#A36548",
          fontFamily: "Arial, sans-serif",
          fontSize: "13px", // Adjust the font size as needed
          fontWeight: "bold", // Make the font weight bold
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px", // Add border radius to round the corners
        }}
      >
        Jardin de Eventos "EL ZARZAL"
      </button>
      <button
        style={{
          position: "absolute",
          top: "500px", // Adjust the top position as needed
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          color: "#A36548",
          fontFamily: "Arial, sans-serif",
          fontSize: "13px", // Adjust the font size as needed
          fontWeight: "bold", // Make the font weight bold
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px", // Add border radius to round the corners
        }}
        onClick={() => window.open("https://maps.app.goo.gl/UUUU2sw5qTEvVQzu6")}
      >
        Jardin de Eventos "EL ZARZAL"
      </button>
    </Container>
  );
};

export default Location;
