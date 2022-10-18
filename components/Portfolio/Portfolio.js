import React, { useState } from "react";
import PortfolioStyles from "./Portfolio.styled";

export default function Portfolio({ pageStyle, pageVariants, pageTransition }) {
  return (
    <PortfolioStyles
      key="#portfolio"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page portfolio"
    >
      <h1>PORTFOLIO!!!!!</h1>
    </PortfolioStyles>
  );
}
