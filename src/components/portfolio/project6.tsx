import React from 'react';
import Project from './projects';

function Blog() {
	return (
		<div>
			<Project
				name={'Blog'}
				desc={
					'Frontend Developer I am a frontend web developer with more than two years of experience Proven experience building successful products for clients across several countries.'
				}
				image='/Blog.PNG'
				live={'https://new-blog-navy.vercel.app/'}
				github={'https://github.com/magdiperper12/NewBlog'}
			/>
		</div>
	);
}

export default Blog;
