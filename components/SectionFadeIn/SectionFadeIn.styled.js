// ****************************************/
// SectionFadeIn
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";
import { motion } from "framer-motion";

const SectionFadeInStyles = styled(motion.section)`
  transition: opacity 0.3s ease-in-out;

  &.is-visible {
    opacity: 1;
  }

  &.is-hidden {
    opacity: 0;
  }
`;

export default SectionFadeInStyles;
