// ****************************************/
// LogoAnimation
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const LogoAnimationStyles = styled(motion.section)`
  position: fixed;
  width: 100%;
  height: 100vh;
	top: 0;
	left: 0;
	z-index: 2;
	pointer-events: none;
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: opacity 1.2s ease-in-out;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: var(--fontSizeDesktop);
  }

	&.is-logo-animated {
		opacity: 0;
		pointer-events: none;
	}
`;

export default LogoAnimationStyles;
