import React, { useState, useEffect } from "react";
import HomeStyles from "./Home.styled";
import LogoDesktop from "../LogoDesktop";
import LogoMobile from "../LogoMobile";
import Spacer from "../Spacer";
import Scrolly from "../Scrolly";
import { ScrollTriggerProvider } from "~/lib/scrollTriggerProvider";
import useWindowSize from '~/lib/useWindowSize';
import useMouseOutside from '~/lib/useMouseOutside';
import random from '~/lib/Utils/random';
import Head from 'next/head';
import { useAppStore } from '~/stores/AppStore';

export default function Home({ pageStyle, pageVariants, pageTransition, logos, general }) {

	const randomIndex = logos?.logoset ? random(0, logos?.logoset?.length - 1) : null;
	
	const email = general?.email;
	const socialMedia = general?.socialMedia;

	const isMouseOutside = useMouseOutside();

	const [{ }, { setActiveIndex }] = useAppStore();

	useEffect(()=> {
		setTimeout(() => {
			setActiveIndex(0);
		}, 0);
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
      className={`page home ${isMouseOutside ? 'is-mouse-out' : ''}`}
    >	
			<Head>
				<title>{general?.seoTitle}</title>
				<meta name="description" content={general?.seoDescription}/>
			</Head>
      {logos && logos?.logoset && (<LogoDesktop logos={logos?.logoset?.[randomIndex]}/>)}
			{logos && logos?.logoset && (<LogoMobile logos={logos?.logoset?.[randomIndex]} />)}
			<Spacer/>
			<Scrolly email={email} socialMedia={socialMedia}/>
    </HomeStyles>
  );
}
