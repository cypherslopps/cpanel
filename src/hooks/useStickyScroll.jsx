import { useEffect, useState } from 'react'

function useStickyScroll(position) {
    const [scrollIsActive, setScrollIsActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(position);
    
    useEffect(() => {
		// Set scroll position
		if(!scrollPosition)
			setScrollPosition(70);

		function checkNavScrollPosition() {
			const { scrollY } = window;
	
			if(scrollY >= scrollPosition)
				setScrollIsActive(true)
			else
				setScrollIsActive(false);
		}
			

		window.addEventListener("scroll", checkNavScrollPosition);

		return () => {
			window.removeEventListener("scroll", checkNavScrollPosition); 
		}
	}, [scrollPosition]);

    return { scrollIsActive };
}

export default useStickyScroll