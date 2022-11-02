import React, { useState } from "react";
import LogoMobileStyles from "./LogoMobile.styled";
import useWindowSize from '~/lib/useWindowSize';
import Logos from '../Logos';

export default function LogoMobile({ logos }) {
	const { viewportW } = useWindowSize();

	const variants = {
		active: {
			height: "47%",
			display: "block"
		},
		inactive: {
			height: "100%",
			display: "none",
		},
		initial: {
			height: "100%",
			display: "block",
		}
	}

  return (
    <LogoMobileStyles
			className="logo-mobile logo-animation"
			initial="initial"
      animate={viewportW !== undefined && viewportW <= 768 ? 'active' : 'inactive'}
			variants={variants}
      transition={{
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
        delay: 2,
        duration: 1.5,
      }}
    >
      <Logos logos={logos}/>
    </LogoMobileStyles>
  );
}
