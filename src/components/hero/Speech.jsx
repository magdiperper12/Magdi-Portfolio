import { TypeAnimation } from 'react-type-animation';

function Speech() {
	return (
		<div className='bubblecontainer'>
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
		</div>
	);
}

export default Speech;
