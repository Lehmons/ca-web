import React, { useState } from "react";
import PortfolioStyles from "./Portfolio.styled";
import MuxPlayer from '@mux/mux-player-react';

export default function Portfolio({ pageStyle, pageVariants, pageTransition, portfolio, video, password }) {
  return (
    <PortfolioStyles
      key="#portfolio"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page portfolio"
    >
			<section>
				{video && (<MuxPlayer playbackId={video?.asset?.playbackId} metadata={{video_title: 'showreel', video_id: video?.asset?.data?.id}}/>)}
				{portfolio && (<a href={`${portfolio?.asset?.url}`} download>Download PDF</a>)}
			</section>
    </PortfolioStyles>
  );
}
