import Project from './projects';

const Project1 = () => {
	return (
		<div>
			<Project
				name={'botbat'}
				desc={
					'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks,Getsby , Hostinger, etc & used by thousands of developers globally'
				}
				image='/p1.jpg'
				live={'https://bat-chat.surge.sh/'}
				github={'https://github.com/magdiperper12/botbat'}
			/>
		</div>
	);
};

export default Project1;
