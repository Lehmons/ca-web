import React, { useState, useEffect, useRef } from "react";
import ScrollElemStyles from "./ScrollElem.styled";
import { useAppStore } from '~/stores/AppStore';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import SectionFadeIn from '../../SectionFadeIn';

export default function ScrollElem({ className, children, fixedPos, heightOffset, topPos, scrollPosition, i }) {
	const elements = React.Children.toArray(children);
	const [isFixed, setIsFixed] = useState(false);
	const [{ }, { setActiveIndex }] = useAppStore();
	let shouldUnfix = false;


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
		console.log(`${i} is now fixed`);
		setActiveIndex(i)
	 }
	}, [isFixed]);



	if(topPos === undefined || fixedPos === undefined){
		return null;
	}

  return (
    <ScrollElemStyles className={`${className} ${isFixed ? 'is-fixed' : ''}`} style={{top: isFixed ? `${fixedPos}px` : `${topPos}px` }} >
			<SectionFadeIn>
      {elements}
			</SectionFadeIn>
    </ScrollElemStyles>
  );
}


// const textVariants = {
//   visible: ({ i, delay }) => ({
//     opacity: 1,
//     transition: {
//       delay: delay + i * 0.1,
//       duration: 0.3,
//     },
//   }),
//   hidden: { opacity: 0 },
// };

// function IntroCoverTitle({ text, inView, delay }) {
//   if (!text) return null;

//   const newStr = text.split(" ");
//   const textControls = useAnimation();

//   React.useEffect(
//     () => {
//       if (inView) {
//         textControls.start("visible");
//       } else {
//         textControls.start("hidden");
//       }
//     },
//     [inView]
//   );

//   const introCoverClass = cx({
//     [styles.box]: true,
//     ["intro-cover-title"]: true,
//   });

//   return (
//     <div className={introCoverClass}>
//       <h2>
//         {newStr.map((c, i) => (
//           <motion.span
//             className={styles.word}
//             key={i}
//             custom={{ i, delay }}
//             animate={textControls}
//             variants={textVariants}
//           >
//             {c}
//           </motion.span>
//         ))}
//       </h2>
//     </div>
//   );
// }

// export default IntroCoverTitle;