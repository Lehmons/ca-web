import React, { useState } from "react";
import HomeStyles from "./Home.styled";
import LogoDesktop from "../LogoDesktop";

export default function Home({ pageStyle, pageVariants, pageTransition }) {
  return (
    <HomeStyles
      key="#home"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page home"
    >
      <LogoDesktop />
    </HomeStyles>
  );
}
