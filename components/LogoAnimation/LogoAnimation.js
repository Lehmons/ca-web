import React, { useState, useEffect } from "react";
import LogoAnimationStyles from "./LogoAnimation.styled";
import useWindowSize from '~/lib/useWindowSize';
import Logos from '../Logos';
import { useAppStore } from '~/stores/AppStore';
import { motion } from 'framer-motion';
import scrollToWithCb from '~/lib/Utils/scrollToWithCb';

export default function LogoAnimation({ logos }) {
	const { viewportW } = useWindowSize();
	const [{ isLogoAnimated }, { setIsLogoAnimated }] = useAppStore();
	
	const onComplete = () => {
		setTimeout(() => {
			setIsLogoAnimated(true);
		}, 1500);
	};

	useEffect(()=> {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		if (!isLogoAnimated) {
			//prevent scrolling on mount
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = originalStyle;
			scrollToWithCb({ top: 100, behavior: 'smooth'});
		}
		// re-enable scrolling when component unmounts
		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [isLogoAnimated]);

	const variants = {
		active: {
			width: viewportW < 768 ? "60%" : "45%",
			left: viewportW < 768 ? "20%" : "27.5%",
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
			className={`logo-animation ${isLogoAnimated ? 'is-logo-animated' : ''}`}
    >
			<motion.wrapper initial="initial"
			animate={'active'}
			variants={variants}
			onAnimationComplete={onComplete}
      transition={{
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
        duration: 1.5,
				delay: 2
      }}>
      	<Logos logos={logos}/>
			</motion.wrapper>
    </LogoAnimationStyles>
  );
}
