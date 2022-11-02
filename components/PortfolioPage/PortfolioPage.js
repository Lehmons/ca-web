import React, { useState } from "react";
import PortfolioPageStyles from "./PortfolioPage.styled";
import MuxPlayer from "@mux/mux-player-react";
import Head from "next/head";
import useMouseOutside from '~/lib/useMouseOutside';


export default function PortfolioPage({
  pageStyle,
  pageVariants,
  pageTransition,
  portfolio,
  video,
	downloadLink
}) {

	const isMouseOutside = useMouseOutside();

  return (
    <PortfolioPageStyles
      key="#portfolio"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`page portfolio ${isMouseOutside ? 'is-mouse-out' : ''}`}
    >
      <Head>
        <title>Commercial Artists</title>
        <meta name="robots" content="noindex" />
      </Head>
      <section className="wrapper">
				<section className='download-panel'>
					{portfolio && (
						<a href={`${portfolio?.asset?.url}`} download>
							{downloadLink ||  "Download PDF"}
						</a>
					)}
				</section>
				<section className="video-container">
        {video && (
          <MuxPlayer
            playbackId={video?.asset?.playbackId}
            metadata={{
              video_title: "showreel",
              video_id: video?.asset?.data?.id,
            }}
          />
        )}
				</section>
      </section>
    </PortfolioPageStyles>
  );
}
