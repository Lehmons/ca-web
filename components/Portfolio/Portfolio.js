import React, { useState, useEffect } from "react";
import PortfolioStyles from "./Portfolio.styled";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useAppStore } from '~/stores/AppStore';
import PortfolioPage from '../PortfolioPage';
import PortfolioLogin from '../PortfolioLogin';
import { useRouter } from 'next/router';

export default function Portfolio({ pageStyle, pageVariants, pageTransition, portfolio, video, password, downloadLink, portfolioLink }) {
	const [{ hasLoggedIn }, { setHasLoggedIn }] = useAppStore();
	const router = useRouter();

	useEffect(() => {
		//redirect to portfolio link if there is a portfolio link
		if (portfolioLink) {
			window.location = portfolioLink;
		}
	}, [portfolioLink]);

	useEffect(() => {
		const cookies = parseCookies();
		if ("hasLoggedIn" in cookies) {
			setHasLoggedIn(true);
		}
	}, []);

	return (hasLoggedIn ?
		<PortfolioPage pageStyle={pageStyle} pageVariants={pageVariants} pageTransition={pageTransition} portfolio={portfolio} video={video} downloadLink={downloadLink} hidePdf={router?.asPath.substring(1).includes('pdf=no')} /> :
		<PortfolioLogin pageStyle={pageStyle} pageVariants={pageVariants} pageTransition={pageTransition} password={password} />);
}
