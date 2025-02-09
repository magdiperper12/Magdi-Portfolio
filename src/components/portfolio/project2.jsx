import Project from './projects';

const Project2 = () => {
	return (
		<div>
			<div>
				<Project
					name={'Football-Historic'}
					desc={
						'by using next js , api , tailwind and typescript make this website have all information about football whith ai chating and fan zone and historic of all football club and player and you can see also place for shopping'
					}
					image='/p2.jpg'
					live={'https://historic.vercel.app/'}
					github={'https://github.com/magdiperper12/HistoricFootball'}
				/>
			</div>
		</div>
	);
};

export default Project2;
