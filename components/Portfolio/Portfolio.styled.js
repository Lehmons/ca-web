// ****************************************/
// Portfolio
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const PortfolioStyles = styled(motion.section)`
  ${media.smallDesktopAndBelow`
	`}
  ${media.mobileOnly`
	`}
`;

export default PortfolioStyles;
