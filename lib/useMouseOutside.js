import { useEffect, useState } from "react";

export default function useMouseOutside() {
  const [isMouseOutside, setIsMouseOutside] = useState(false);

  function handleLeave(e) {
		if(e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)){
				setIsMouseOutside(true);	
		}
	}

	function handleEnter(){
		setIsMouseOutside(false);
	}

	useEffect(()=> {
		document?.documentElement?.addEventListener("mouseleave", handleLeave);
		document?.documentElement?.addEventListener("mouseenter", handleEnter);
		return() =>  {
			document?.documentElement?.removeEventListener("mouseleave", handleLeave);
			document?.documentElement?.removeEventListener("mouseenter", handleEnter);
		}
	}, []);

  return isMouseOutside;
}
