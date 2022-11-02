// ****************************************/
// ScrollElem
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";
import { motion } from 'framer-motion';

const ScrollElemStyles = styled(motion.section)`
  position: absolute;
	top: 100vh;
	background: var(--backgroundColour);

	&.is-fixed {
		position: fixed;
	}

	p > span:nth-child(2) {
		transition: opacity 0.6s ease-in-out;
	}

	&.is-fixed p > span:nth-child(2){
		opacity: 0.2;
	}
`;

export default ScrollElemStyles;
