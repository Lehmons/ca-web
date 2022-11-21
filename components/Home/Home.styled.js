// ****************************************/
// Home
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const HomeStyles = styled(motion.section)`
  width: 100%;
  height: 100%;
	background: var(--backgroundColour);

	.logo-static svg path,
	.logo-static .logos svg rect,
	.logo-static .logos svg polygon{
		fill: var(--textColour);
	}


	/* &.is-not-logo-animated {
		animation: backgroundFade;
		animation-duration: 1.5s;
		animation-delay: 4s;
	}

	&.is-not-logo-animated .logos svg path,
	&.is-not-logo-animated .logos svg rect,
	&.is-not-logo-animated .logos svg polygon {
		animation: fillFade;
		animation-duration: 1.5s;
		animation-delay: 4s;
	}

	&.is-logo-animated .logos svg path,
	&.is-logo-animated .logos svg rect,
	&.is-logo-animated .logos svg polygon {
		fill: var(--textColour);
	} */

	&.is-mouse-out {
		background: var(--offscreenColour);
	}

	&.is-mouse-out .logo-animation{
		background: var(--offscreenColour);
	}

	&.is-mouse-out,
	&.is-mouse-out .one,
	&.is-mouse-out .two,
	&.is-mouse-out .three {
		background: var(--offscreenColour);
	}

	&.is-mouse-out .logos svg path,
	&.is-mouse-out .logos svg rect,
	&.is-mouse-out .logos svg polygon {
		fill: var(--offscreenTextColour);
	}

	&.is-mouse-out p,
	&.is-mouse-out a {
		color: var(--offscreenTextColour);
	}

	/* &.is-resizing {
		background: var(--offscreenColour);
	} */

	&.is-resizing p, 
	&.is-resizing a {
		opacity: 0;
	}

	.counter {
		position: fixed;
		top: 5px;
		right: 5px;
		z-index: 3;
		color: white;
	}

`;

export default HomeStyles;
