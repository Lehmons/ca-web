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
