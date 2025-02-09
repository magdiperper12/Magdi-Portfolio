import Project from './projects';

const Project3 = () => {
	return (
		<div>
			<Project
				name={'Social Media'}
				desc={
					'by using next js , tailwind and typescript make this website are a social media website that have all the feature of social media like post , comment , like and followin also have notification and stories'
				}
				image='/social.PNG'
				live={'https://social-midea.vercel.app/'}
				github={'https://github.com/magdiperper12/SocialMidea'}
			/>
		</div>
	);
};

export default Project3;
