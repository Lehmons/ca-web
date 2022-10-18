// ****************************************/
// ImageBlock
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ImageBlockStyles = styled.section`
  position: relative;
  .image-wrapper {
    position: relative;
    height: 0;
  }

  &.no-padding-bottom .image-wrapper {
    height: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.6s ease-in-out;
  }

  &.lazy-pending img {
    opacity: 0;
  }

  &.lazy-visible img {
    opacity: 1;
  }

  p {
    margin-top: 1.2rem;
    font-family: ${font.family200};
    @supports (font-variation-settings: normal) {
      font-family: ${font.family200VF};
    }
    font-size: ${font.smallP};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      margin-top: 12px;
      font-size: ${font.smallPMobile};
    `}
  }
`;

export default ImageBlockStyles;
