import React, { useState, useEffect, useRef } from "react";
import ScrollElemStyles from "./ScrollElem.styled";
import { useAppStore } from '~/stores/AppStore';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function ScrollElem({ className, children, fixedPos, heightOffset, topPos, scrollPosition, i }) {
	const elements = React.Children.toArray(children);
	const [isFixed, setIsFixed] = useState(false);
	const [{ }, { setActiveIndex }] = useAppStore();
	let shouldUnfix = false;


	// useEffect(() => {
	// 	function onScroll(){
	// 		const { scrollY } = window;
	// 		if(fixedPos === undefined){
	// 			return;
	// 		}
	// 		setIsFixed(scrollY >= fixedPos + heightOffset);
	// 	}
	// 	window.addEventListener('scroll', onScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', onScroll);
	// 	}
	// }, [fixedPos]);

	useScrollPosition(
    ({ prevPos, currPos }) => {
      if (scrollPosition === undefined) {
        return;
      }
      const { scrollY } = window;

			const newFixed = scrollY >= scrollPosition + heightOffset;

      setIsFixed(newFixed);

			if(newFixed){
				shouldUnfix = true;
			}

			if(shouldUnfix && !newFixed && prevPos.y < currPos.y){
				setActiveIndex(i - 1);
				shouldUnfix = false;
			}
    },
    [fixedPos, scrollPosition]
  );

	useEffect(()=> {
	 if(isFixed){
		setActiveIndex(i)
	 }
	}, [isFixed]);



	if(topPos === undefined || fixedPos === undefined){
		return null;
	}

  return (
    <ScrollElemStyles className={`${className} ${isFixed ? 'is-fixed' : ''}`} style={{top: isFixed ? `${fixedPos}px` : `${topPos}px` }} >
      {elements}
    </ScrollElemStyles>
  );
}
