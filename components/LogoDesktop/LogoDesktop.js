import React, { useState } from "react";
import LogoDesktopStyles from "./LogoDesktop.styled";
import useWindowSize from '~/lib/useWindowSize';
import Logos from '../Logos';

export default function LogoDesktop({ logos }) {
	const { viewportW } = useWindowSize();

	const variants = {
		active: {
			width: "66.6%",
			left: "33.3%",
			display: "block"
		},
		inactive: {
			width: "100%",
			left: "0%",
			display: "none",
		},
		initial: {
			width: "100%",
			left: "0%",
			display: "block",
		}
	}

  return (
    <LogoDesktopStyles
			className="logo-desktop logo-animation"
			initial="initial"
			animate={viewportW !== undefined && viewportW > 768 ? 'active' : 'inactive'}
			variants={variants}
      transition={{
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
        duration: 1.5,
				delay: 2
      }}
    >
      <Logos logos={logos}/>
    </LogoDesktopStyles>
  );
}
