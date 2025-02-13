import Card from "@mui/material/Card";
import Image from "next/image";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Modal,
  Typography,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";

interface CardComponentProps {
  slideActive: boolean;
}
export default function CardComponent({
  slideActive = true,
}: CardComponentProps) {
  const [openModal, setOpenModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [openToast, setOpenToast] = useState(false);

  const eventDate = new Date("2025-03-22T00:00:00");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = eventDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);
  const airlineName = "DIMELZA & ALAN";

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setFullName("");
    setOpenModal(false);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = encodeURIComponent(`Confirmo mi asistencia: ${fullName}`);
    const urlBase = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`;
    const whatsappUrl = `${urlBase}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setOpenToast(true);
    handleClose();
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: "#CAD1C4",
        width: {
          xs: "100%",
          sm: "70%",
          md: "60%",
        },
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        padding: "0.1rem",
      }}
    >
      <CardHeader
        title={
          <Typography
            align="center"
            color="#593E2F"
            sx={{
              fontFamily: "Arial Black",
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderBottom: "2px solid #A36548",
            }}
          >
            Pase de Abordar
          </Typography>
        }
      />
      <Box
        id="cuerpo"
        sx={{
          bgcolor: "#F5F5F5", // Cambiado a un tono diferente de blanco
          height: "100%",
          width: "100%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Alinea elementos al inicio (arriba)
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#A36548",
            textAlign: "center", // Centra el texto
            width: "100%",
          }}
        >
          {airlineName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Abadi",
              color: "#A36548",
            }}
          >
            AIRLINES
          </Typography>
          <img
            src="/logoavion.png"
            alt="logo avion"
            width={"120px"}
            height={"20px"}
            style={{
              animation: "moveAndViewRight 3s infinite",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          className={`csSubtitleCard ${slideActive ? "csViewLeft" : ""}`}
        >
          CLASE:
        </Typography>
        <Typography
          variant="h6"
          className={`csContentCard ${slideActive ? "csViewRight" : ""} `}
        >
          NUPCIAL
        </Typography>
        <Typography
          variant="body1"
          className={`csSubtitleCard ${slideActive ? "csViewLeft" : ""}`}
        >
          ACCESO VIP:
        </Typography>
        <Typography
          variant="h6"
          className={`csContentCard ${slideActive ? "csViewRight" : ""} `}
        >
          PARA VIVIR JUNTOS
        </Typography>
        <Typography
          variant="h6"
          className={`csContentCard ${slideActive ? "csViewRight" : ""} `}
        >
          ESTE MOMENTO INOLVIDABLE
        </Typography>
        <Typography
          variant="body1"
          className={`csSubtitleCard ${slideActive ? "csViewLeft" : ""}`}
        >
          FECHA:
        </Typography>
        <Typography
          variant="h6"
          className={`csContentCard ${slideActive ? "csViewRight" : ""} `}
        >
          22 MARZO 2025
        </Typography>
        <Typography
          variant="body1"
          className={`csSubtitleCard ${slideActive ? "csViewLeft" : ""}`}
          sx={{ textAlign: "center", paddingX: "0px" }}
        >
          VÁLIDO HASTA:
        </Typography>
        <Box
          id="countdown"
          className={slideActive ? "csView" : ""}
          sx={{
            display: "flex",
            gap: "10px",
            textAlign: "center",
            justifyContent: "center",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box id="dia" sx={{ display: "inline-block" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Franklin Gothic",
                fontWeight: "bold",
                color: "#A9B0A3",
              }}
            >
              {days}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: "#A36548",
              }}
            >
              DIAS
            </Typography>
          </Box>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              color: "#A9B0A3",
            }}
          >
            :
          </Box>
          <Box id="hora" sx={{ display: "inline-block" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Franklin Gothic",
                fontWeight: "bold",
                color: "#A9B0A3",
              }}
            >
              {hours}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: "#A36548",
              }}
            >
              HRS
            </Typography>
          </Box>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              color: "#A9B0A3",
            }}
          >
            :
          </Box>
          <Box id="min" sx={{ display: "inline-block" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Franklin Gothic",
                fontWeight: "bold",
                color: "#A9B0A3",
              }}
            >
              {minutes}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: "#A36548",
              }}
            >
              MINS
            </Typography>
          </Box>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              color: "#A9B0A3",
            }}
          >
            :
          </Box>
          <Box id="seg" sx={{ display: "inline-block" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Franklin Gothic",
                fontWeight: "bold",
                color: "#A9B0A3", // Tono más oscuro
              }}
            >
              {seconds}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: "#A36548",
              }}
            >
              SECS
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          className={`csSubtitleCard ${slideActive ? "csViewLeft" : ""}`}
        >
          DESTINO:
        </Typography>
        <Typography
          variant="h6"
          className={`csContentCard ${slideActive ? "csViewRight" : ""} `}
          sx={{ textAlign: "center", paddingX: "0px" }}
        >
          JUNTOS HASTA EL
        </Typography>
        <Typography
          variant="h6"
          className={`csContentCard ${slideActive ? "csViewRight" : ""} `}
          sx={{ textAlign: "center", paddingX: "0px" }}
        >
          FIN
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "60%",
            height: "70px",
            border: "1px solid #A36548",
            justifySelf: "center",
            alignSelf: "center",
          }}
        >
          <Image
            id="codigo"
            src="/codigo.png"
            alt="Código de barras"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{
              objectFit: "fill",
            }}
          />
        </Box>
      </Box>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            backgroundColor: "#ffffff",
            color: "#593E2F",
            fontFamily: "Imprint MT Shadow",
            borderRadius: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          CONFIRMA ASISTENCIA
        </Button>
      </CardActions>
      <Modal
        open={openModal}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            width: "400px",
            outline: "none",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#593E2F", mb: 2 }}
          >
            Confirmar Asistencia
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nombre Completo"
              variant="outlined"
              required
              value={fullName}
              onChange={handleInputChange}
              sx={{ mb: 3 }}
            />

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{ color: "#593E2F", borderColor: "#593E2F" }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#CAD1C4",
                  "&:hover": { backgroundColor: "#CAD1C4" },
                }}
              >
                Confirmar
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={openToast}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "#CAD1C4",
            color: "#593E2F",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          ¡Gracias por confirmar tu asistencia!
        </Alert>
      </Snackbar>
    </Card>
  );
}
