import React, { useState } from "react";
import LogoMobileStyles from "./LogoMobile.styled";
import useWindowSize from '~/lib/useWindowSize';
import Logos from '../Logos';

export default function LogoMobile({ logos }) {
	const { viewportW } = useWindowSize();

	const variants = {
		active: {
			height: "50%",
			display: "block"
		},
		inactive: {
			height: "100%",
			display: "none",
		}
	}

  return (
    <LogoMobileStyles
			initial="inactive"
      animate={viewportW !== undefined && viewportW <= 768 ? 'active' : 'inactive'}
			variants={variants}
      transition={{
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
        duration: 1.5,
      }}
    >
      <Logos logos={logos}/>
    </LogoMobileStyles>
  );
}
