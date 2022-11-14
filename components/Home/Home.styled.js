// ****************************************/
// Home
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const HomeStyles = styled(motion.section)`
  width: 100%;
  height: 100%;
	background: white;

	@keyframes backgroundFade {
		from {
			background: white;
			fill: white;
		}

		to {
			fill: var(--backgroundColour);
			background: var(--backgroundColour);
		}
	}

	@keyframes fillFade {
		from {
			fill: black !important;
		}

		to {
			fill: var(--textColour);
		}
	}


	&.is-not-logo-animated {
		animation: backgroundFade;
		animation-duration: 1.5s;
		animation-delay: 2.5s;
	}

	&.is-not-logo-animated .logos svg path,
	&.is-not-logo-animated .logos svg rect,
	&.is-not-logo-animated .logos svg polygon {
		animation: fillFade;
		animation-duration: 1.5s;
		animation-delay: 2.5s;
	}

	&.is-logo-animated .logos svg path,
	&.is-logo-animated .logos svg rect,
	&.is-logo-animated .logos svg polygon {
		fill: var(--textColour);
	}

	&.is-logo-animated {
		background: var(--backgroundColour);
	}

	&.is-mouse-out {
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

`;

export default HomeStyles;
