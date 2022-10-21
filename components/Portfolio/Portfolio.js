import React, { useState, useEffect } from "react";
import PortfolioStyles from "./Portfolio.styled";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useAppStore } from '~/stores/AppStore';
import PortfolioPage from '../PortfolioPage';
import PortfolioLogin from '../PortfolioLogin';

export default function Portfolio({ pageStyle, pageVariants, pageTransition, portfolio, video, password }) {
	const [{ hasLoggedIn }, { setHasLoggedIn }] = useAppStore();
	
	useEffect(()=> {
		const cookies = parseCookies();
		if ("hasLoggedIn" in cookies) {
			setHasLoggedIn(true);
		}
	}, []);

  return(hasLoggedIn ? 
		<PortfolioPage pageStyle={pageStyle} pageVariants={pageVariants} pageTransition={pageTransition} portfolio={portfolio} video={video} /> : 
		<PortfolioLogin pageStyle={pageStyle} pageVariants={pageVariants} pageTransition={pageTransition} password={password} />);
}
