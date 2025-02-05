import './hero.css';
import { CiDesktopMouse2 } from 'react-icons/ci';
import Speech from './Speech';
import { BsArrowUp } from 'react-icons/bs';
import { motion, useInView } from 'motion/react';
import Shape from './shape';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

const awardsvaraints = {
	initial: { x: -100, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, staggerChildren: 0.3 },
	},
};
const followvariants = {
	initial: { y: -100, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 1, staggerChildren: 0.3 },
	},
};
function Hero() {
	const ref = useRef();
	const isview = useInView(ref, { margin: '-200px' });
	return (
		<div
			className='hero'
			ref={ref}>
			<div className='hSecttion left'>
				{/*title*/}
				<motion.h1
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className='htitle'>
					Hey There, <br />
					<span className='ititle'>I`m Magdi</span>
				</motion.h1>
				{/*awards*/}
				<motion.div
					variants={awardsvaraints}
					animate={isview ? 'animate' : 'initial'}
					className='awards'>
					<motion.h1 variants={awardsvaraints}>Frontend Developer</motion.h1>
					<motion.p variants={awardsvaraints}>
						Proficient in building scalable, responsive web applications with a
						focus on performance,user experience, and accessibility.
					</motion.p>
					<motion.div
						variants={awardsvaraints}
						className='awardList'>
						<motion.img
							variants={awardsvaraints}
							src='/award1.png'
							alt=''
						/>
						<motion.img
							variants={awardsvaraints}
							src='/award2.png'
							alt=''
						/>
						<motion.img
							variants={awardsvaraints}
							src='/award3.png'
							alt=''
						/>
					</motion.div>
				</motion.div>
				{/*scroll svg*/}
				<motion.div
					animate={{ y: [0, 8], opacity: [0, 1, 0] }}
					transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
					<CiDesktopMouse2 className='scroll' />
				</motion.div>
			</div>
			<div className='hSecttion right'>
				<motion.div
					className='follow'
					variants={followvariants}
					animate={isview ? 'animate' : 'initial'}>
					<motion.a
						variants={followvariants}
						href='/'>
						<img
							src='/instagram.png'
							alt=''
						/>
					</motion.a>
					<motion.a
						variants={followvariants}
						href='/'>
						<img
							src='/facebook.png'
							alt=''
						/>
					</motion.a>
					<motion.a
						variants={followvariants}
						href='/'>
						<img
							src='/youtube.png'
							alt=''
						/>
					</motion.a>
					<motion.div
						variants={followvariants}
						className='followtextcontainer'>
						<div className='followtext'>FOLLOW ME</div>
					</motion.div>
				</motion.div>

				{/*Bubble*/}
				<Speech />
				{/*certificate */}
				<motion.div
					animate={{ opacity: [0, 1] }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className='certificate'>
					<img
						src='/certificate.png'
						alt=''
					/>
					LAM CERTIFICATED <br />
					PROFETIONAL <br />
					UI DESIGNER
				</motion.div>
				{/*contact button*/}
				<motion.a
					animate={{ rotate: [0, 360] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
					href='/#contact'
					className='contactLink'>
					<div className='contactButton'>
						<svg
							viewBox='0 0 200 200'
							width='150'
							height='150'>
							<circle
								cx='100'
								cy='100'
								r='90'
								fill='pink'
							/>
							<path
								id='innerCirclePath'
								fill='none'
								d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
							/>
							<text className='circleText'>
								<textPath href='#innerCirclePath'>Hire Now 🤗</textPath>
							</text>
							<text className='circleText'>
								<textPath
									href='#innerCirclePath '
									startOffset='45%'>
									Contact Me 📩
								</textPath>
							</text>
						</svg>
						<BsArrowUp className='arrow' />
					</div>
				</motion.a>
			</div>
			<div
				className='bg '
				style={{ zIndex: -1 }}>
				{/* 3d */}
				<Canvas>
					<mesh>
						<Suspense fallback={'Loading...'}>
							<Shape />
						</Suspense>
					</mesh>
				</Canvas>

				<motion.div
					animate={{ y: [50, 0], x: [50, 0] }}
					transition={{ duration: 1 }}
					className='himg'>
					<img
						src='/magdi.png'
						alt=''
					/>
				</motion.div>
			</div>
		</div>
	);
}

export default Hero;
