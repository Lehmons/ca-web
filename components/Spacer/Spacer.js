import React, { useState, useEffect } from "react";
import SpacerStyles from "./Spacer.styled";

export default function Spacer() {
	const [hasRendered, setHasRendered] = useState(false);

	useEffect(()=> {
		setHasRendered(true);
	}, []);

  return (
    <SpacerStyles className={`${hasRendered ? 'is-hidden' : ''}`}>
      <section />
    </SpacerStyles>
  );
}
