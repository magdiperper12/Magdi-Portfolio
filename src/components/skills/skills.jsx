import './skills.css';
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaBootstrap,
	FaGithub,
	FaGitAlt,
} from 'react-icons/fa';
import {
	SiTailwindcss,
	SiTypescript,
	SiNextdotjs,
	SiGatsby,
	SiVite,
} from 'react-icons/si';
import { TbDeviceDesktop, TbRotate3D } from 'react-icons/tb';
import { MdAnimation } from 'react-icons/md';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
const skills = [
	{
		category: 'Languages',
		items: [
			{ name: 'HTML', icon: <FaHtml5 className='html' /> },
			{ name: 'CSS', icon: <FaCss3 className='css' /> },
			{ name: 'JavaScript', icon: <FaJs className='js' /> },
			{ name: 'TypeScript', icon: <SiTypescript className='ts' /> },
		],
	},
	{
		category: 'Frameworks',
		items: [
			{ name: 'ReactJS', icon: <FaReact className='react' /> },
			{ name: 'NextJS', icon: <SiNextdotjs className='nextjs' /> },
			{ name: 'Gatsby', icon: <SiGatsby className='gatsby' /> },
			{ name: 'TailwindCSS', icon: <SiTailwindcss className='tailwind' /> },
			{ name: 'Bootstrap', icon: <FaBootstrap className='bootstrap' /> },
		],
	},
	{
		category: 'Tools',
		items: [
			{ name: 'Git', icon: <FaGitAlt className='git' /> },
			{ name: 'GitHub', icon: <FaGithub className='github' /> },
			{ name: 'Vite', icon: <SiVite className='vite' /> },
		],
	},
	{
		category: 'Techniques',
		items: [
			{ name: 'Animation', icon: <MdAnimation className='animation' /> },
			{ name: '3D', icon: <TbRotate3D className='threeD' /> },
			{
				name: 'Responsive Design',
				icon: <TbDeviceDesktop className='responsive' />,
			},
		],
	},
];

const Skills = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-300px' });

	const listVariant = {
		initial: {
			x: 100,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.7,
				staggerChildren: 0.4,
			},
		},
	};
	const secound = {
		initial: {
			x: 100,
			y: -100,
			opacity: 0,
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.7,
				staggerChildren: 0.4,
			},
		},
	};

	return (
		<>
			<motion.div
				className='skills-container'
				ref={ref}
				variants={listVariant}
				initial='initial'
				animate={isInView ? 'animate' : 'initial'}>
				<motion.h1
					className='skills-title'
					variants={listVariant}>
					My <span>Skills</span>
				</motion.h1>
				<motion.div
					className='skills-grid'
					ref={ref}
					variants={listVariant}
					initial='initial'
					animate={isInView ? 'animate' : 'initial'}>
					{skills.map((skill) => (
						<motion.div
							variants={listVariant}
							key={skill.category}
							className='skill-category'>
							<motion.h2>{skill.category}</motion.h2>
							<motion.div
								className='skill-list'
								variants={secound}
								initial='initial'
								animate={isInView ? 'animate' : 'initial'}>
								{skill.items.map((item, index) => (
									<motion.div
										key={index}
										className='skill-box'
										variants={secound}>
										<motion.div
											className='icon'
											variants={secound}>
											{item.icon}
										</motion.div>
										<motion.span variants={secound}>{item.name}</motion.span>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</>
	);
};

export default Skills;
