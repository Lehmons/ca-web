// ****************************************/
// LogoDesktop
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const LogoDesktopStyles = styled(motion.section)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: white;
	top: 0;
	left: 0;
	z-index: 2;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: var(--fontSizeDesktop);
  }
`;

export default LogoDesktopStyles;
