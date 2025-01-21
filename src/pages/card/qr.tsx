import React from "react";
import * as QRCode from "qrcode.react";
import { Box } from "@mui/material";

interface QRButtonProps {
  qrValue: string;
}

const QRButton: React.FC<QRButtonProps> = ({ qrValue }) => {
  return (
    <Box
      id="qr"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      sx={{
        minHeight: "20vh",
      }}
    >
      <h1
        style={{
          fontFamily: "Edwardian Script ITC, cursive",
          fontStyle: "normal",
          fontSize: "60px",
          marginTop: "2px",
          marginBottom: "-15px",
          color: "#A67C52", // Darker color
        }}
      >
        Pase Qr
      </h1>
      <QRCode.QRCodeCanvas
        value={qrValue}
        size={170} // Tamaño reducido
        style={{ margin: "20px" }}
      />
      <h2
        style={{
          fontFamily: "Batang, serif",
          fontStyle: "normal",
          fontSize: "16px",
          marginTop: "-15px",
          color: "#A67C52", // Darker color
        }}
      >
        Gracias por confirmar tu asistencia
      </h2>
      <h2
        style={{
          fontFamily: "Arial Nova Cond, sans-serif",
          fontStyle: "normal",
          fontSize: "12px",
          marginTop: "-2px",
          color: "#A67C52", // Darker color
        }}
      >
        Favor presentar este código en la entrada del
      </h2>
      <h2
        style={{
          fontFamily: "Arial Nova Cond, sans-serif",
          fontStyle: "normal",
          fontSize: "12px",
          marginTop: "-2px",
          color: "#A67C52", // Darker color
        }}
      >
        evento.
      </h2>
    </Box>
  );
};

export default QRButton;
