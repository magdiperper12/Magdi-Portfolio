import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';
function Speech() {
	return (
		<motion.div
			className='bubblecontainer'
			animate={{ opacity: [0, 1] }}
			transition={{ duration: 2 }}>
			<div className='buble'>
				<TypeAnimation
					sequence={[
						1000,
						"Hi ther, my name is magdi , I'm a frontend developer",
						1000,
						'i can building interactive & user-friendly web app',
						1000,
						'How can i help you ...?',
						1000,
					]}
					wrapper='span'
					speed={40}
					repeat={Infinity}
				/>
			</div>
			<img
				src='/man.png'
				alt=''
			/>
		</motion.div>
	);
}

export default Speech;
