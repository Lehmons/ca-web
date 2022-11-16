import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rawMarkup from '~/lib/rawMarkup';

const textVariants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

export default function TextFadeIn({ arr }) {
	const textControls = useAnimation();
	const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

	useEffect(
    () => {
      if (inView) {
        textControls.start("visible");
      } else {
        textControls.start("hidden");
      }
    },
    [inView]
  );


  return (
    <section ref={ref}>
      {arr.map((c, i) => (
          <motion.span
            key={i}
            custom={i}
            animate={textControls}
            variants={textVariants}
						dangerouslySetInnerHTML={c && rawMarkup(c)} 
          />
        ))}
    </section>
  );
}
