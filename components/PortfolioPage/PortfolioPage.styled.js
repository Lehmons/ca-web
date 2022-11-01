// ****************************************/
// PortfolioPage
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const PortfolioPageStyles = styled(motion.section)`
  background: white;
  height: 100%;
  min-height: 100vh;
  ${media.tabletPortraitAndBelow`
	`}

  section {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: white;
    margin: auto;
  }

  a {
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 1;
    width: 33.3%;
    color: black;
    text-align: center;
    background: var(--backgroundColour);
  }

  mux-player {
    display: flex;
    width: 66.7%;
    padding: 6rem;
    max-height: calc(100% - 12rem);
    max-width: calc(100% - 12rem);
    background: white;
  }
`;

export default PortfolioPageStyles;
