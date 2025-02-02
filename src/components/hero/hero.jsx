import './hero.css';
import { CiDesktopMouse2 } from 'react-icons/ci';
import Speech from './Speech';
import { BsArrowUp } from 'react-icons/bs';
function Hero() {
	return (
		<div className='hero'>
			<div className='hSecttion left'>
				{/*title*/}
				<h1 className='htitle'>
					Hey There, <br />
					<span className='ititle'>I`m Magdi</span>
				</h1>
				{/*awards*/}
				<div className='awards'>
					<h1>Frontend Developer</h1>
					<p>
						Proficient in building scalable, responsive web applications with a
						focus on performance,user experience, and accessibility.
					</p>
					<div className='awardList'>
						<img
							src='/award1.png'
							alt=''
						/>
						<img
							src='/award2.png'
							alt=''
						/>
						<img
							src='/award3.png'
							alt=''
						/>
					</div>
				</div>
				{/*scroll svg*/}
				<CiDesktopMouse2 className='scroll' />
			</div>
			<div className='hSecttion right'>
				<div className='follow'>
					<a href='/'>
						<img
							src='/instagram.png'
							alt=''
						/>
					</a>
					<a href='/'>
						<img
							src='/facebook.png'
							alt=''
						/>
					</a>
					<a href='/'>
						<img
							src='/youtube.png'
							alt=''
						/>
					</a>
					<div className='followtextcontainer'>
						<div className='followtext'>FOLLOW ME</div>
					</div>
				</div>

				{/*Bubble*/}
				<Speech />
				{/*certificate */}
				<div className='certificate'>
					<img
						src='/certificate.png'
						alt=''
					/>
					LAM CERTIFICATED <br />
					PROFETIONAL <br />
					UI DESIGNER
				</div>
				{/*contact button*/}
				<a
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
									Contact Me 👍
								</textPath>
							</text>
						</svg>
						<BsArrowUp className='arrow' />
					</div>
				</a>
			</div>
		</div>
	);
}

export default Hero;
