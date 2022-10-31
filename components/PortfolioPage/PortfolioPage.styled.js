// ****************************************/
// PortfolioPage
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const PortfolioPageStyles = styled(motion.section)`
  background: white;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  ${media.tabletPortraitAndBelow`
	`}

  a {
    justify-content: center;
    align-items: center;
    width: 33.3%;
    color: black;
    display: flex;
    text-align: center;
    background: var(--backgroundColour);
    ${media.tabletPortraitAndBelow`
		top: 0;
		display: flex;
    width: 100%;
    height: 100%;
    position: flex-start;
	`}
  }

  mux-player {
    width: 66.7%;
    max-height: calc(100% - 12rem);
    max-width: calc(100% - 12rem);
    ${media.tabletLandscapeAndBelow`
		display: flex;
		`}
  }

  section {
    direction: rtl;
    display: flex;
    width: 100%;
    height: 100%;
    margin: auto;
    justify-content: space-between;
    ${media.tabletLandscapeAndBelow`
			display: flex;
      flex-direction: column;
      background: blue;
		`}
  }
`;

export default PortfolioPageStyles;
