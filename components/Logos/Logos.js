import React, { useState, useEffect } from "react";
import LogosStyles from "./Logos.styled";
import ImageBlock from '../ImageBlock';
import { useAppStore } from '~/stores/AppStore';
import rawMarkup from '~/lib/rawMarkup';

export default function Logos({ logos }) {
	const [{ activeIndex }] = useAppStore();

	const logoReference = [logos?.logo1, logos?.logo2, logos?.logo3, logos?.logo4, logos?.logo5, logos?.logo6, logos?.logo7, logos?.logo8, logos?.logo9, logos?.logo10, logos?.logo11, logos?.logo12 ];

  return (
    <LogosStyles className="logos">
			<span className="svg-container" dangerouslySetInnerHTML={logoReference[activeIndex] && rawMarkup(logoReference[activeIndex])} />
    </LogosStyles>
  );
}
