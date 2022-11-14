import React, { useState } from "react";
import LogoAnimationStyles from "./LogoStatic.styled";
import useWindowSize from '~/lib/useWindowSize';
import Logos from '../Logos';
import { useAppStore } from '~/stores/AppStore';

export default function LogoAnimation({ logos }) {

  return (
    <LogoAnimationStyles
			className="logo-static"
    >
			<section className="wrapper">
      	<Logos logos={logos}/>
			</section>
    </LogoAnimationStyles>
  );
}
