// ****************************************/
// Logos
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const LogosStyles = styled.section`
	height: 100vh;
	pointer-events: none;
	
	.svg-container {
		display: block;
		width: 100%;
		height: 100%;
	}

	svg {
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: contain;
		${media.tabletPortraitAndBelow`
			top: -15px;
		`}
	}

`;

export default LogosStyles;
