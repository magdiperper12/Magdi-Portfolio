import { useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion';

function Counter({ from, to, text }) {
	const [count, setCount] = useState(from);
	const ref = useRef();
	const isInView = useInView(ref); // Runs only once when in view

	useEffect(() => {
		if (isInView) {
			const animation = animate(from, to, {
				duration: 5,
				ease: 'easeOut',
				onUpdate: (prev) => {
					setCount(Math.floor(prev));
				},
			});
			return () => {
				animation.cancel();
			};
		}
	}, [isInView, from, to]);

	return (
		<div
			ref={ref}
			className='counter'>
			<h1>{count}+</h1>
			<p>{text}</p>
		</div>
	);
}

export default Counter;
