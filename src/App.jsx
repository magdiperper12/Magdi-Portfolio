import Contact from './components/contact/contact';
import Hero from './components/hero/hero';
import Project1 from './components/portfolio/project1';
import Project2 from './components/portfolio/project2';
import Project3 from './components/portfolio/project3';
import Project4 from './components/portfolio/project4';
import Project5 from './components/portfolio/project5';
import Blog from './components/portfolio/project6';
import Services from './components/services/services';
import Skills from './components/skills/skills';

const App = () => {
	return (
		<div className='container'>
			<section id='#home'>
				<Hero />
			</section>
			<section id='#services'>
				<Services />
			</section>

			{/*skills */}
			<section>
				<Skills id='#skills' />
			</section>

			{/*project sections */}
			<section id='#Project1'>
				<Project1 />
			</section>
			<section id='#Project2'>
				<Project2 />
			</section>
			<section id='#Project3'>
				<Project3 />
			</section>
			<section id='#Project4'>
				<Project4 />
			</section>
			<section id='#Project6'>
				<Blog />
			</section>
			<section id='#Project5'>
				<Project5 />
			</section>

			<section id='#contact'>
				<Contact />
			</section>
		</div>
	);
};

export default App;
