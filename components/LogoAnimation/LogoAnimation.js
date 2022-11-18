import React, { useState, useEffect } from "react";
import LogoAnimationStyles from "./LogoAnimation.styled";
import useWindowSize from '~/lib/useWindowSize';
import Logos from '../Logos';
import { useAppStore } from '~/stores/AppStore';
import { motion } from 'framer-motion';
import scrollToWithCb from '~/lib/Utils/scrollToWithCb';

export default function LogoAnimation({ logos }) {
	const { viewportW } = useWindowSize();
	const [{ isLogoAnimated }, { setIsLogoAnimated, setActiveIndex }] = useAppStore();
	const [windowSize, setWindowSize] = useState();
	const timeout = useRef();

	const onStart = () => {
		setIsLogoAnimated(false);
		setActiveIndex(0);
	};
	
	const onComplete = () => {
		setTimeout(() => {
			setIsLogoAnimated(true);
		}, windowSize < 768 ? 750 : 1500);
	};

	useEffect(()=> {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		function preventMotion(event)
		{
				window.scrollTo(0, 0);
				event.preventDefault();
				event.stopPropagation();
		}

		if (!isLogoAnimated) {
			//prevent scrolling on mount
			document.body.style.overflow = "hidden";
			document.body.style.position = "relative";
			window.addEventListener("touchmove", preventMotion, false);
		} else {
			document.body.style.overflow = originalStyle;
			document.body.style.position = '';
			window.removeEventListener("touchmove", preventMotion, false);
			clearTimeout(timeout.current);
			timeout.current = setTimeout(() => {
				scrollToWithCb({ top: 100, behavior: 'smooth'});
			}, 1200);
			
		}
		// re-enable scrolling when component unmounts
		return () => {
			document.body.style.overflow = originalStyle;
			document.body.style.position = '';
			window.removeEventListener("touchmove", preventMotion, false);
		};
	}, [isLogoAnimated]);

	useEffect(()=> {
	 setWindowSize(window.innerWidth);
	}, []);

	const variants = {
		active: {
			width: windowSize < 768 ? "100%" : "65%",
			left: windowSize < 768 ? "0%" : "17.5%",
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
			animate={windowSize ? 'active' : "initial"}
			variants={variants}
			onAnimationStart={onStart}
			onAnimationComplete={onComplete}
      transition={{
        type: "tween",
        ease: [0.42, 0, 0.58, 1],
        duration: windowSize < 768 ? 0.75 : 1.5,
				delay: 2
      }}>
      	<Logos logos={logos}/>
			</motion.wrapper>
    </LogoAnimationStyles>
  );
}
