import React, { useState } from "react";
import PortfolioPageStyles from "./PortfolioPage.styled";
import MuxPlayer from '@mux/mux-player-react';
import Head from 'next/head';

export default function PortfolioPage({ pageStyle, pageVariants, pageTransition, portfolio, video }) {
  return (
		<PortfolioPageStyles
		key="#portfolio"
		style={pageStyle}
		initial="initial"
		animate="in"
		exit="out"
		variants={pageVariants}
		transition={pageTransition}
		className="page portfolio"
	>
		<Head>
				<title>Commercial Artists</title>
				<meta name="robots" content="noindex"/>
			</Head>
		<section>
				{video && (<MuxPlayer playbackId={video?.asset?.playbackId} metadata={{video_title: 'showreel', video_id: video?.asset?.data?.id}}/>)}
				{portfolio && (<a href={`${portfolio?.asset?.url}`} download>Download PDF</a>)}
			</section>
	</PortfolioPageStyles>
  );
}
