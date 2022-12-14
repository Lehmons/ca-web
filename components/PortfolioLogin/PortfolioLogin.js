import React, { useState } from "react";
import PortfolioLoginStyles from "./PortfolioLogin.styled";
import { useRouter } from 'next/router';
import Input from '../Input';
import { useAppStore } from '~/stores/AppStore';
import { setCookie } from 'nookies';
import Head from 'next/head';
import useMouseOutside from '~/lib/useMouseOutside';

export default function PortfolioLogin({ pageStyle, pageVariants, pageTransition, password, downloadLink }) {
	const [{ hasLoggedIn }, { setHasLoggedIn }] = useAppStore();

	const isMouseOutside = useMouseOutside();
	
	const onInput = e => {
		if(e?.target?.value === password){
			setCookie(null, 'hasLoggedIn', true, {
				maxAge: 30 * 24 * 60 * 60,
				path: '/',
			});
			setHasLoggedIn(true);
		}
	};
	
	const router = useRouter();
  return (
    <PortfolioLoginStyles
		key="#portfolio-login"
		style={pageStyle}
		initial="initial"
		animate="in"
		exit="out"
		variants={pageVariants}
		transition={pageTransition}
		className={`page portfolio-page ${isMouseOutside ? 'is-mouse-out' : ''}`}
		>
			<Head>
				<title>Commercial Artists</title>
				<meta name="robots" content="noindex"/>
			</Head>
      <section>
				<h1>{router?.asPath.substring(1).replace(/[/-]+/g, ' ').replace('\?pdf=no', '')}</h1>
			</section>
			<section>
				<form>
					<Input
						title={"Password"}
						name={"password"}
						type={"password"}
						autoComplete={"password"}
						autoFocus={"autoFocus"}
						className={"password"}
						placeholder={"password"}
						onInput={onInput}
						submit={false}
						hasError={false}
						error={null}
					/>
				</form>
			</section>
    </PortfolioLoginStyles>
  );
}
