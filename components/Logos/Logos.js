import React, { useState, useEffect } from "react";
import LogosStyles from "./Logos.styled";
import ImageBlock from '../ImageBlock';
import { useAppStore } from '~/stores/AppStore';

export default function Logos({ logos }) {
	const [{ activeIndex }] = useAppStore();

	const logoReference = [logos?.logo1, logos?.logo2, logos?.logo3, logos?.logo4];

  return (
    <LogosStyles className="logos">
			<ImageBlock asset={logoReference[activeIndex]?.image?.asset} image={logoReference[activeIndex]?.image} paddingBottom={false} />
    </LogosStyles>
  );
}
