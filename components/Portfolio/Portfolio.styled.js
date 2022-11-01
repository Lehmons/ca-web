// ****************************************/
// Portfolio
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const PortfolioStyles = styled(motion.section)`
  background: white;
  height: 100%;
  min-height: 100vh;

  a {
    color: black;
    display: block;
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  section {
    width: 100%;
    height: 100%;
    max-width: 66vw;
    margin: auto;
    padding-top: 50px;
    ${media.tabletLandscapeAndBelow`
			max-width: 100vw;
			padding-left: 20px;
			padding-right: 20px;
		`}
  }
`;

export default PortfolioStyles;
