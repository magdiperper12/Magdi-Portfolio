import ComputerModelContainer from './mac/ComputerModelContainer';
import MugModelContainer from './mug/MugModelContainer';
import './services.css';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import HumanContainer from './robot/HumanContainer';
import Conter from './counter';

const textVariants = {
	initial: {
		x: -100,
		y: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const listVariants = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.5,
		},
	},
};

const services = [
	{
		id: 1,
		img: '/service1.png',
		title: 'Web Development',
		counter: 54,
	},
	{
		id: 2,
		img: '/service2.png',
		title: 'Advanced Project',
		counter: 23,
	},
	{
		id: 3,
		img: '/service3.png',
		title: 'Framework',
		counter: 7,
	},
];

const Services = () => {
	const [select, setSelect] = useState(1);
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-200px' });
	return (
		<div
			className='services'
			ref={ref}>
			<div className='sSection left'>
				<motion.h1
					variants={textVariants}
					animate={isInView ? 'animate' : 'initial'}
					className='sTitle'>
					How do I help?
				</motion.h1>
				<motion.div
					variants={listVariants}
					animate={isInView ? 'animate' : 'initial'}
					className='serviceList'>
					{services.map((service) => (
						<motion.div
							variants={listVariants}
							className='service'
							key={service.id}
							onClick={() => setSelect(service.id)}>
							<div className='serviceIcon'>
								<img
									src={service.img}
									alt=''
									loading='lazy'
								/>
							</div>
							<div className='serviceInfo'>
								<h2>{service.title}</h2>
								<h3>{service.counter} Projects</h3>
							</div>
						</motion.div>
					))}
				</motion.div>
				<div className='counterList'>
					<Conter
						from={0}
						to={54}
						text={'Project Complate'}
					/>
					<Conter
						from={0}
						to={23}
						text={'Advanced Project'}
					/>
				</div>
			</div>
			<div className='sSection right'>
				{select === 1 ? (
					<ComputerModelContainer />
				) : select === 2 ? (
					<HumanContainer />
				) : (
					<MugModelContainer />
				)}
			</div>
		</div>
	);
};

export default Services;
