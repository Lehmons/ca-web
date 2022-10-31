// ****************************************/
// Scrolly
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const ScrollyStyles = styled.section`
	padding-left: 2rem;
	padding-right: 2rem;
	padding-bottom: 2rem;
	padding-top: 100vh;
	${media.smallDesktopAndBelow`
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
	`}

	.wrapper {
		width: 100%;
		height: auto;
	}

	.wrapper section + section {
		margin-top: 1rem;
		${media.smallDesktopAndBelow`
			margin-top: 10px;
		`}
	}

	.four {
		padding-bottom: 20rem;
	}

	.one,
	.two,
	.three {
		position: sticky;
		background: var(--backgroundColour);
	}

	.one {
		top: calc(50vh - 1rem);
		${media.tabletLandscapeAndBelow`
			top: calc(50vh - 10px);
		`}
	}

	.two {
		top: calc(50vh - 1rem + 5.5rem);
		${media.tabletLandscapeAndBelow`
			top: calc(50vh - 10px + 55px);
		`}
	}

	.three {
		padding-bottom: 2rem;
		top: calc(50vh - 1rem + 5.5rem + 5.5rem);
		${media.tabletLandscapeAndBelow`
			padding-bottom: 20px;
			top: calc(50vh - 10px + 55px + 55px);
		`}
	}

	/* .four {
		padding-top: 4rem;
		${media.tabletLandscapeAndBelow`
			padding-top: 40px;
		`}
		${media.tabletPortraitAndBelow`
			padding-top: 25px;
		`}
	} */


	p {
		font-size: var(--fontSizeLargeDesktop);
		text-transform: uppercase;
		letter-spacing: var(--letterSpacing);
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
