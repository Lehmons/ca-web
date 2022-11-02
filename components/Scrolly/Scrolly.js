import React, { useState, useEffect, useRef } from "react";
import ScrollyStyles from "./Scrolly.styled";
import scrollToWithCb from '~/lib/Utils/scrollToWithCb';
import { useAppStore } from '~/stores/AppStore';
import SimpleBlockContent from "../SimpleBlockContent";
import useWindowSize from '~/lib/useWindowSize';
import ScrollElem from "./ScrollElem";
import Fourth from "./Fourth";

export default function Scrolly({ email, socialMedia}) {
	const { viewportW, viewportH } = useWindowSize();
	const [ fixedPositions, setFixedPositions ] = useState();
	const [ tops, setTops ] = useState();
	const ref = useRef();
	const marginSpace = 10;

	const calculate = () => {
		const sections = [...ref.current.querySelectorAll('.pseudo > section')];
		if(!sections?.length){
			return;
		}
		const offset = viewportW < 768 ? 100 : 100;

		// set top of elements to create offsets
		const newTops = [];
		let heightCounter = 0;
		sections.map((section, i) => {
			if(i === 0){
				newTops.push(viewportH);
				heightCounter += viewportH;
			} else{
				const prevElem = sections[i - 1];
				const height = prevElem?.getBoundingClientRect()?.height;
				newTops.push(height + heightCounter + (marginSpace * i));
				heightCounter += height;
			}
		});
		setTops(newTops);

		// set fixed position based on viewportH / 2 + section heights
		const newFixedPositions = [];
		heightCounter = 0;
		const basePosition = (viewportH / 2);
		sections.map((section, i) => {
			if(i === 0){
				newFixedPositions.push(basePosition);
				heightCounter += basePosition;
			} else{
				const prevElem = sections[i - 1];
				const prevElemSpan = prevElem?.querySelector('.two-lines');
				const height = prevElemSpan?.getBoundingClientRect()?.height || 0;
				newFixedPositions.push(height + heightCounter);
				heightCounter += height;
			}
		});
		setFixedPositions(newFixedPositions);

	};

	useEffect(()=> {
		window.requestAnimationFrame(()=> {
			setTimeout(() => {
				calculate();			
			}, 500);
		});
	}, [viewportW, viewportH]);

	useEffect(()=> {
		setTimeout(() => {
			scrollToWithCb({ top: 100, behavior: 'smooth'});
		}, 1300 + 2000);
	}, []);

	const convertToRemOrPx = val => {
		if(!viewportW || viewportW <= 1440){
			return val;
		}
		return (val / 1440) * viewportW;
	};

  return (
    <ScrollyStyles ref={ref}>
			<ScrollElem className="one" fixedPos={fixedPositions?.[0] || null} topPos={tops?.[0] || null} heightOffset={0} i={1}>
				<p><span>is a multi-disciplinary<br/> london-based collective<br/> </span><span>working alongside clients<br/> from initial creative<br/> strategy to final execution.</span></p>
			</ScrollElem>
			<ScrollElem className="two" fixedPos={fixedPositions?.[1] || null} topPos={tops?.[1] || null} heightOffset={40} i={2}>
				<p><span>We explore, question,<br/> collaborate and create.<br/></span><span>Using art direction, design and<br/> spatial forms to delier emotive<br/> concepts for a diverse audience.</span></p>
			</ScrollElem>
			<ScrollElem className="three" fixedPos={fixedPositions?.[2] || null} topPos={tops?.[2] || null} heightOffset={73} i={3}>
					<p>Our experiences and communities<br/> define our way forward.</p>
			</ScrollElem>
			<Fourth >
				<p>{email && (<SimpleBlockContent blocks={email}/>)}{socialMedia ? (socialMedia.map((item, i) => (
						<SimpleBlockContent key={i} blocks={item?.link}/>))) : null}</p>
			</Fourth>
			<section className="pseudo">
				<section className="one" >
					<p><span className="two-lines">is a multi-disciplinary<br/> london-based collective<br/> </span><span>working alongside clients<br/> from initial creative<br/> strategy to final execution.</span></p>
				</section>
				<section className="two" >
					<p><span className="two-lines">We explore, question,<br/> collaborate and create.<br/></span><span>Using art direction, design and<br/> spatial forms to delier emotive<br/> concepts for a diverse audience.</span></p>
				</section>
				<section className="three" >
					<p>Our experiences and communities<br/> define our way forward.</p>
				</section>
			</section>
    </ScrollyStyles>
  );
}
