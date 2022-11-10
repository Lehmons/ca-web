import React, { useState } from "react";
import TestStyles from "./Test.styled";
import rawMarkup from '~/lib/rawMarkup';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function Test({ pageStyle, pageVariants, pageTransition, logos, general }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const logoReference = [logos?.logoset?.[0]?.logo1, logos?.logoset?.[0]?.logo2, logos?.logoset?.[0]?.logo3, logos?.logoset?.[0]?.logo4];

	useScrollPosition(
    ({ prevPos, currPos }) => {
			const pos = Math.abs(currPos?.y);
      if(pos < 50){
				setActiveIndex(0);
			}
			else if(pos < 200){
				setActiveIndex(1);
			}
			else if(pos < 300){
				setActiveIndex(2);
			}
			else if(pos < 400){
				setActiveIndex(3);
			}
			else if(pos < 500){
				setActiveIndex(0);
			}
    },
    [activeIndex]
  );

  return (
    <TestStyles>
      <span className="svg-container" dangerouslySetInnerHTML={logoReference[activeIndex] && rawMarkup(logoReference[activeIndex])} />
    </TestStyles>
  );
}
