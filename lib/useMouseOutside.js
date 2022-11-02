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
		document.addEventListener("mouseleave", handleLeave);
		document.addEventListener("mouseenter", handleEnter);
		return() =>  {
			document.removeEventListener("mouseleave", handleLeave);
			document.removeEventListener("mouseenter", handleEnter);
		}
	}, []);

  return isMouseOutside;
}
