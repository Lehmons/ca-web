// ****************************************/
// Spacer
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const SpacerStyles = styled.section`
  position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: white;
	z-index: 2;

	&.is-hidden {
		display: none;
	}
`;

export default SpacerStyles;
