// ****************************************/
// LogoStatic
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const LogoStaticStyles = styled(motion.section)`
  position: fixed;
  width: 100%;
  height: 100vh;
	top: 0;
	left: 0;
	z-index: 1;
	pointer-events: none;
	display: flex;
	align-item: center;
	justify-content: center;

	& > .wrapper {
		width: 45%;
		left: 27.5%;
		display: block;
		${media.tabletPortraitAndBelow`
			width: 100%;
			left: 0%;
		`}
	}
`;

export default LogoStaticStyles;
