import React, { useState } from "react";
import LogoAnimationStyles from "./LogoAnimation.styled";
import useWindowSize from '~/lib/useWindowSize';
import Logos from '../Logos';
import { useAppStore } from '~/stores/AppStore';

export default function LogoAnimation({ logos }) {
	const { viewportW } = useWindowSize();
	const [{ }, { setIsLogoAnimated }] = useAppStore();
	
	const onComplete = () => {
		setIsLogoAnimated(true)
	};

	const variants = {
		active: {
			width: "45%",
			left: "27.5%",
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
    <LogoAnimationStyles
			className="logo-animation"
			initial="initial"
			animate={'active'}
			variants={variants}
			onAnimationComplete={onComplete}
      transition={{
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
        duration: 1.5,
				delay: 2
      }}
    >
      <Logos logos={logos}/>
    </LogoAnimationStyles>
  );
}
