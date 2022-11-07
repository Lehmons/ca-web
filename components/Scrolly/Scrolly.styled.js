// ****************************************/
// Scrolly
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ScrollyStyles = styled.section`
	position: relative;
	padding-left: 2rem;
	padding-right: 2rem;
	padding-bottom: 2rem;
	padding-top: 100vh;
	padding-bottom: 100vh;
	${media.smallDesktopAndBelow`
		padding-left: 20px;
		padding-right: 20px;
	`}

	.wrapper {
		width: 100%;
		height: auto;
	}

	.pseudo {
		opacity: 0;
	}

	.pseudo section + section {
		margin-top: 400px;
	}

	& > .three {
		padding-bottom: 4rem;
		${media.smallDesktopAndBelow`
			padding-bottom: 40px;
		`}
	}

	p {
		text-transform: uppercase;
		letter-spacing: var(--letterSpacing);
		font-size: var(--fontSizeDesktop);
		color: var(--textColour);
		${media.smallDesktopAndBelow`
			font-size: var(--fontSizeDesktop);
		`}
		${media.tabletPortraitAndBelow`
			font-size: var(--fontSizeMobile);
		`}
	}

	a {
		color: black;
	}
`;

export default ScrollyStyles;
