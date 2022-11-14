import React, { useState, useEffect } from "react";
import HomeStyles from "./Home.styled";
import LogoAnimation from "../LogoAnimation";
import Spacer from "../Spacer";
import Scrolly from "../Scrolly";
import { ScrollTriggerProvider } from "~/lib/scrollTriggerProvider";
import useWindowSize from '~/lib/useWindowSize';
import useMouseOutside from '~/lib/useMouseOutside';
import random from '~/lib/Utils/random';
import Head from 'next/head';
import { useAppStore } from '~/stores/AppStore';

export const thisIsAnUnusedExport = "this export only exists to disable fast refresh for this file";

export default function Home({ pageStyle, pageVariants, pageTransition, logos, general }) {

	const randomIndex = logos?.logoset ? random(0, logos?.logoset?.length - 1) : null;
	
	const email = general?.email;
	const socialMedia = general?.socialMedia;

	const isMouseOutside = useMouseOutside();
	// const isMouseOutside = false;

	const [{ activeIndex, isLogoAnimated }, { setActiveIndex, setIsLogoAnimated }] = useAppStore();

	useEffect(()=> {
		setTimeout(() => {
			setActiveIndex(0);
		}, 0);
		function setLogoAnimatedOnScroll(){
			setIsLogoAnimated(true);
			window.removeEventListener('scroll', setLogoAnimatedOnScroll);
		}
		window.addEventListener('scroll', setLogoAnimatedOnScroll);
	}, []);

  return (
    <HomeStyles
      key="#home"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`page home ${isMouseOutside ? 'is-mouse-out' : ''} ${isLogoAnimated ? 'is-logo-animated' : 'is-not-logo-animated'}`}
    >	
			<Head>
				<title>{general?.seoTitle}</title>
				<meta name="description" content={general?.seoDescription}/>
			</Head>
				<>
					{logos && logos?.logoset && (<LogoAnimation logos={logos?.logoset?.[randomIndex]}/>)}
					<Scrolly email={email} socialMedia={socialMedia}/>
				</>
    </HomeStyles>
  );
}
