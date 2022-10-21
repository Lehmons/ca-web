import React, { useState, useEffect, useRef } from "react";
import ScrollyStyles from "./Scrolly.styled";
import { useScrollTrigger } from "~/lib/scrollTriggerProvider";
import useClientRect from "~/lib/useClientRect";
import { useAnimation, motion, transform } from 'framer-motion';
import scrollToWithCb from '~/lib/Utils/scrollToWithCb';
import SectionFadeIn from "../SectionFadeIn";
import { useAppStore } from '~/stores/AppStore';
import SimpleBlockContent from "../SimpleBlockContent";

export default function Scrolly({ email, socialMedia}) {
	const [{ }, { setActiveIndex }] = useAppStore();

	const onInView = i => {
		setActiveIndex(i);
	};

	useEffect(()=> {
	 setTimeout(() => {
		scrollToWithCb({ top: 100, behavior: 'smooth'});
	 }, 1300);
	}, []);

	console.log(socialMedia);

  return (
    <ScrollyStyles >
      <section className="wrapper" >
				<SectionFadeIn className="one" index={0} onInView={onInView}>
          <p><span>is a multi-disciplinary<br/> london-based collective<br/> </span><span>working alongside clients<br/> from initial creative<br/> strategy to final execution.</span></p>
        </SectionFadeIn>
				<SectionFadeIn className="two" index={1} onInView={onInView}>
          <p><span>We explore, question,<br/> collaborate and create.<br/></span><span>Using art direction, design and<br/> spatial forms to delier emotive<br/> concepts for a diverse audience.</span></p>
        </SectionFadeIn>
				<SectionFadeIn className="three" index={2} onInView={onInView}>
          <p>Our experiences and communities<br/> define our way forward.</p>
        </SectionFadeIn>
				<SectionFadeIn className="four" index={3} onInView={onInView}>
          <p>{email && (<SimpleBlockContent blocks={email}/>)}{socialMedia ? (socialMedia.map((item, i) => (
						<SimpleBlockContent key={i} blocks={item?.link}/>))) : null}</p>
        </SectionFadeIn>
			</section>
    </ScrollyStyles>
  );
}
