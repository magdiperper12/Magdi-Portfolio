import ComputerModelContainer from './computer/ComputerModelContainer';

function Services() {
	return (
		<div className='services'>
			<div className='sService left'>First section</div>
			<div className='sService right'>
				<ComputerModelContainer />
			</div>
		</div>
	);
}

export default Services;
