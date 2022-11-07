// ****************************************/
// Fourth
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../../Styles";

const FourthStyles = styled.section`
  position: fixed;
	bottom: 2rem;
	left: 2rem;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;

	${media.smallDesktopAndBelow`
		bottom: 20px;
		left: 20px;		
	`}

	&.is-active {
		opacity: 1;
	}

	p, a {
		font-size: var(--fontSizeDesktop);
		color: var(--textColour);
	}
`;

export default FourthStyles;
