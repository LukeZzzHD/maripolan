import React from 'react';

const ProjectDetails = props => {
	const { id } = props.match.params;
	return (
		<div className='container section project-details'>
			<div className='card z-depth-0'>
				<div className='card-content'>
					<span className='card-title'>Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestiae impedit harum, sint similique dolor repellendus adipisci soluta rem deleniti dolorem quidem deserunt eos, eveniet
						suscipit quam voluptatem, laborum aut?
					</p>
				</div>
				<div className='card-action gery lighten-4 grey-text'>
					<div>Posted by The Net Ninja</div>
					<div>2nd September, 2am</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
