// ****************************************/
// Global Styles & Resets
// ****************************************/

import { createGlobalStyle } from "styled-components";
import media from "./Media";
import font from "./Font";

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
	}


	html{
		box-sizing: border-box;
		-webkit-print-color-adjust: exact;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	*, *:before, *:after{
		box-sizing: inherit;
	}

	body,h1,h2,h3,h4,p{
		border: 0;
	}

  body {
    font-weight: 500;
		font-family: ${font.family100};
  }

	::-webkit-scrollbar {
		display: none;
	}

	html, body{
		font-size:  ${(props) =>
      (props.theme.baseline * 100) / props.theme.viewport}vmax;
		/* font-size: 0.694vmax */
		/* 1440px times 0.694 = 10px base */
	}

	a {
		outline: 0;
		text-decoration: none;
	}

	ul{
		text-decoration: none;
		list-style-type: none;
		padding: 0;
	}

	h1, h2, h3, h4, h5, h6, p, a, li, span, input, label, button, em, figcaption{
		text-rendering: optimizelegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		font-weight: normal;
		font-feature-settings: "kern" 1;
	}

	
	button:focus {
    outline: none;
  }

	button {
		border: 0;
    font-family: ${font.family100};
    background: transparent;
	}

	button:hover {
		cursor: pointer;
	}
	button[disabled]{
    opacity: 0.2;
    pointer-events: none;
  }
	#site{
		margin-left: auto;
		margin-right: auto;
	}

	p, a {
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
`;

export default GlobalStyles;
