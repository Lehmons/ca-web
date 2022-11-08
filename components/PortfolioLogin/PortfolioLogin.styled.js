// ****************************************/
// PortfolioLogin
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const PortfolioLoginStyles = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background: var(--backgroundColour);
  display: flex;

	&.is-mouse-out {
		background: white;
	}

	${media.tabletPortraitAndBelow`
			flex-direction: column-reverse;
		`}

  & > section {
    height: 100vh;
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: flex-start;
    ${media.tabletPortraitAndBelow`
			padding: 20px;
		`}
  }

  & > section:nth-child(1) {
    width: 33.3%;
		${media.tabletPortraitAndBelow`
			width: 100%;
			height: 50%;
		`}
  }

  & > section:nth-child(2) {
    flex: 1;
    background: white;
  }

	&.is-mouse-out > section:nth-child(2){
		background: var(--offscreenColour);
	}

	h1 {
		color: var(--textColour);
	}

	&.is-mouse-out h1 {
		color: var(--offscreenTextColour);
	}


  h1,
  input {
    font-size: var(--fontSizeDesktop);
    text-transform: uppercase;
    letter-spacing: var(--letterSpacing);
    ${media.smallDesktopAndBelow`
			font-size: var(--fontSizeDesktop);
		`}
    ${media.tabletPortraitAndBelow`
			font-size: var(--fontSizeMobile) !important;
		`}
  }

  input {
    width: 100%;
    height: 100%;
    border-bottom: initial !important;
  }

  .label-title {
    display: none !important;
  }
`;

export default PortfolioLoginStyles;
