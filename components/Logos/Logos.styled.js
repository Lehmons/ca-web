// ****************************************/
// Logos
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const LogosStyles = styled.section`
	height: 100vh;
	
	.svg-container {
		display: block;
		width: 100%;
		height: 100%;
	}

	svg {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	svg polygon,
	svg rect,
	svg path {
		fill: var(--textColour);
	}

`;

export default LogosStyles;
