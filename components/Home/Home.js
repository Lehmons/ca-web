import React, { useState, useEffect, useRef } from "react";
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
import scrollToWithCb from '~/lib/Utils/scrollToWithCb';
import { motion, animate } from 'framer-motion';
import { useRouter } from 'next/router';

export const unusedExport = "this export only exists to disable fast refresh for this file";

export default function Home({ pageStyle, pageVariants, pageTransition, logos, general }) {
	const ref = useRef();
	const shouldScroll = useRef(true);
	const timeout = useRef();
	const router = useRouter();

	const randomIndex = logos?.logoset ? random(0, logos?.logoset?.length - 1) : null;
	
	const email = general?.email;
	const socialMedia = general?.socialMedia;
	const [isResizing, setIsResizing] = useState(false);
	let resizeTimer = useRef();

	const isMouseOutside = useMouseOutside();
	// const isMouseOutside = false;

	const [{ activeIndex, isLogoAnimated }, { setActiveIndex, setIsLogoAnimated }] = useAppStore();

	useEffect(()=> {
		setTimeout(() => {
			setActiveIndex(0);
				clearTimeout(timeout.current);
				timeout.current = setTimeout(() => {
					if(!shouldScroll.current){
						clearTimeout(timeout.current);
						return;
					}
					scrollToWithCb({ top: 100, behavior: 'smooth'});
				}, 1300 + 2000 + 500 + 1500);
		}, 0);
		function setLogoAnimatedOnScroll(){
			setIsLogoAnimated(true);
			shouldScroll.current = false;
			window.removeEventListener('scroll', setLogoAnimatedOnScroll);
		}
		window.addEventListener('scroll', setLogoAnimatedOnScroll);
	}, []);

	const confirmPageRefresh = (e) => {
		ref.current.classList.remove("is-logo-animated");
		void ref.current.offsetWidth;
		ref.current.classList.add("is-not-logo-animated");
		ref.current.style.animation = "backgroundFade";
		ref.current.style.webkitAnimation = 'none';
		const newone = ref.current.cloneNode(true);
		ref.current.parentNode.replaceChild(newone, ref.current);
		document.body.innerHTML = '';
		setActiveIndex(0);
		setIsLogoAnimated(false);
		window.scrollTo(0, 0)
		shouldScroll.current = true;
		document.getAnimations().forEach((anim) => {
			anim.cancel();
		});
	};

	const handleResize = e => {
		e?.preventDefault();
		clearTimeout(resizeTimer.current);
		if(window.innerWidth < 768){
			return;
		}
		setIsResizing(true);
		resizeTimer.current = setTimeout(() => {
			setIsResizing(false);
		}, 1200);
	};
	
	const restartCSS = () => {
		setTimeout(() => {
		ref.current.style.animationName = "none";
		ref.current.style.animation = "backgroundFade";
		ref.current.style.background = "white";
		requestAnimationFrame(() => {
			setTimeout(() => {
				ref.current.style.background = "";
				ref.current.style.animationName = ""
			}, 0);
		}, 500);
});
	}

	useEffect(() => {
		restartCSS();
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
      className={`page home ${isMouseOutside ? 'is-mouse-out' : ''} ${isLogoAnimated ? 'is-logo-animated' : 'is-not-logo-animated'} ${isResizing ? 'is-resizing' : ''}`}
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
