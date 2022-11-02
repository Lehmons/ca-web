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


	&.is-mouse-out,
	&.is-mouse-out .one,
	&.is-mouse-out .two,
	&.is-mouse-out .three {
		background: white;
	}

	&.is-mouse-out .logos {
		background: var(--offscreenColour);
	}
`;

export default HomeStyles;
