import React from "react";
import { useEffect } from "react";
import * as lottie from "lottie-web";

const LordIcon = ({
  src,
  trigger = "loop",
  delay = 1000,
  colors = "primary:#fff,secondary:#fff",
  width = 150,
  height = 150,
}) => {
  useEffect(() => {
    const animationContainer = document.createElement("div");
    animationContainer.style.width = width + "px";
    animationContainer.style.height = height + "px";
    document.body.appendChild(animationContainer);

    const lottieAnimation = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: trigger === "loop",
      autoplay: true,
      delay,
      path: src,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
      colors,
    });

    return () => {
      lottieAnimation.destroy();
      animationContainer.remove();
    };
  }, [src, trigger, delay, colors, width, height]);

  return null;
};

export default LordIcon;
