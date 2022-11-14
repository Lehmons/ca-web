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

  .wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    background: white;
    margin: auto;
		align-items: center;
    ${media.smallDesktopAndBelow`

	`}
		${media.tabletPortraitAndBelow`
			flex-direction: column-reverse;
		`}
  }

  .download-panel {
    align-items: center;
    display: flex;
    position: relative;
    left: 0;
    height: 100%;
    z-index: 1;
    width: 33.3%;
    color: black;
    text-align: center;
    background: var(--backgroundColour);
		${media.tabletPortraitAndBelow`
			width: 100%;
			height: 50%;
		`}
  }

	&.is-mouse-out .download-panel{
		background: white;
	}


	a {
		color: black;
		text-align: center;
		padding-left: 2rem;
		padding-right: 2rem;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		${media.smallDesktopAndBelow`
			padding-left: 20px;
			padding-right: 20px;
		`}
	}

	.video-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 66.6%;
		height: 100vh;
		padding-left: 6rem;
		padding-right: 6rem;
		${media.smallDesktopAndBelow`
			padding-left: 60px;
			padding-right: 60px;
		`}
		${media.tabletPortraitAndBelow`
			width: 100%;
			height: 50%;
			padding: 20px;
			height: 50vh;
		`}
	}

	&.has-hidden-pdf .video-container {
		width: 100%;
		${media.tabletPortraitAndBelow`
			height: 100vh;
		`}
	}

	&.has-hidden-pdf .video-container mux-player {
		max-width: 1000px;
	}

	&.is-mouse-out .video-container{
		background: var(--offscreenColour);
	}

	/* mux-player {
		width: 100%;
		height: 100%;
		max-width: calc(100% - 12rem);
		max-height: calc(100vh - 12rem);
		${media.smallDesktopAndBelow`
			max-width: calc(100% - 120px);
			max-height: calc(100vh - 120px);
		`}
		${media.tabletPortraitAndBelow`
			max-width: calc(100vw - 40px);
			max-height: calc(50vh - 40px);
		`}
	} */
`;

export default PortfolioPageStyles;
