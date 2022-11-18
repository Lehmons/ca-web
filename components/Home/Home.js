import React, { useState, useEffect, useRef } from "react";
import HomeStyles from "./Home.styled";
import LogoAnimation from "../LogoAnimation";
import LogoStatic from "../LogoStatic";
import Spacer from "../Spacer";
import Scrolly from "../Scrolly";
import { ScrollTriggerProvider } from "~/lib/scrollTriggerProvider";
import useWindowSize from '~/lib/useWindowSize';
import useMouseOutside from '~/lib/useMouseOutside';
import random from '~/lib/Utils/random';
import Head from 'next/head';
import { useAppStore } from '~/stores/AppStore';
import scrollToWithCb from '~/lib/Utils/scrollToWithCb';
import { motion, animate } from 'framer-motion';
import { useRouter } from 'next/router';

export const unusedExport = "this export only exists to disable fast refresh for this file";

export default function Home({ pageStyle, pageVariants, pageTransition, logos, general }) {
	const ref = useRef();
	const router = useRouter();

	const randomIndex = logos?.logoset ? random(0, logos?.logoset?.length - 1) : null;
	
	const email = general?.email;
	const socialMedia = general?.socialMedia;
	const [isResizing, setIsResizing] = useState(false);
	let resizeTimer = useRef();

	const isMouseOutside = useMouseOutside();
	// const isMouseOutside = false;

	const [{ activeIndex }, { setActiveIndex }] = useAppStore();


	const confirmPageRefresh = (e) => {
		void ref.current.offsetWidth;
		ref.current.style.webkitAnimation = 'none';
		const newone = ref.current.cloneNode(true);
		ref.current?.parentNode?.replaceChild(newone, ref.current);
		document.body.innerHTML = '';
		setActiveIndex(0);
		window.scrollTo(0, 0)
		document.getAnimations().forEach((anim) => {
			anim.cancel();
		});
	};

	const handleResize = e => {
		e?.preventDefault();
		if(window.innerWidth < 500){
			clearTimeout(resizeTimer.current);
			setIsResizing(false);
			return;
		}

		clearTimeout(resizeTimer.current);
		setIsResizing(true);
		resizeTimer.current = setTimeout(() => {
			setIsResizing(false);
		}, 400);
	};


	useEffect(() => {
		window.addEventListener('beforeunload', confirmPageRefresh);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener('beforeunload', confirmPageRefresh);
			window.addEventListener("resize", handleResize);
		}
	}, []);

  return (
    <HomeStyles
      key="#home"
			ref={ref}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`page home ${isMouseOutside ? 'is-mouse-out' : ''} ${isResizing ? 'is-resizing' : ''}`}
    >	
			<Head>
				<title>{general?.seoTitle}</title>
				<meta name="description" content={general?.seoDescription}/>
			</Head>
				<>
					{logos && logos?.logoset && (<LogoAnimation logos={logos?.logoset?.[randomIndex]}/>)}
					{logos && logos?.logoset && (<LogoStatic logos={logos?.logoset?.[randomIndex]}/>)}
					<Scrolly email={email} socialMedia={socialMedia}/>
				</>
    </HomeStyles>
  );
}
