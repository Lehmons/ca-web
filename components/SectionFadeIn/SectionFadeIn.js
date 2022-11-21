import React, { useState, useEffect, useRef } from "react";
import SectionFadeInStyles from "./SectionFadeIn.styled";
import { useInView } from "react-intersection-observer";
import isInViewport from "../../lib/isInViewport";

export default function SectionFadeIn({ children, index, onInView, className}) {
  const elements = React.Children.toArray(children);
	const [isScrollingUp, setIsScrollingUp] = useState(false);

  const containerRef = useRef();
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: false
  });

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
			if(onInView){
				onInView(index);
			}
    }
		if(!inView){
			setVisible(false);
			if(isScrollingUp && onInView){
				onInView(index);
			}
		} 
  }, [inView, isScrollingUp]);

  useEffect(() => {
		let prevScrollY = 0;
		function onScroll(){
			const curScrollY = window.scrollY;
			setIsScrollingUp(curScrollY < prevScrollY);
			prevScrollY = curScrollY;
		}
    window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		}
  }, []);

  return (
    <SectionFadeInStyles
      ref={ref}
      className={`${isVisible ? "is-visible" : "is-hidden"} ${className ||
        ""}`}
    >
      <section ref={containerRef}>{elements}</section>
    </SectionFadeInStyles>
  );
}
