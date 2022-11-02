import React, { useState } from "react";
import FourthStyles from "./Fourth.styled";
import { useAppStore } from '~/stores/AppStore';

export default function Fourth({ children }) {
	const elements = React.Children.toArray(children);
	const [{ activeIndex }] = useAppStore();

  return (
    <FourthStyles className={`four ${activeIndex === 3 ? 'is-active' : ''}`}>
				{elements}
    </FourthStyles>
  );
}
