// ****************************************/
// Test
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from 'framer-motion';

const TestStyles = styled(motion.section)`
  width: 100%;
  height: 300vh;
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

	.svg-container {
		position: fixed;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
	}

	svg {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	svg polygon,
	svg rect,
	svg path {
		fill: var(--textColour);
	}
`;

export default TestStyles;
