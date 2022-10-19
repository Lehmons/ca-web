import React, { useState } from "react";
import LogoMobileStyles from "./LogoMobile.styled";

export default function LogoMobile() {
  return (
    <LogoMobileStyles
      animate={{
        width: "50%",
        left: "50%",
      }}
      transition={{
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
        duration: 1.5,
        delay: 1,
      }}
    >
      <h1>Logo will go here</h1>
    </LogoMobileStyles>
  );
}
