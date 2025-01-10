import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }
  25% {
    transform: translateY(-8px) scale(1.1);
  }
  50% {
    transform: translateY(0) scale(1);
  }
  75% {
    transform: translateY(4px) scale(0.9);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

const BouncingButton = styled.button`
  position: relative;
  z-index: 6; /* Ajusta el valor según sea necesario */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  transform: translate(-50%, -50%);
  margin: auto;
  animation: ${bounceAnimation} 1.5s ease-in-out infinite;
  border: none; /* Quita el borde predeterminado del botón */
  background: transparent; /* Hace el botón transparente */
  cursor: pointer; /* Cambia el cursor a mano al pasar por encima */
`;

export default BouncingButton;
