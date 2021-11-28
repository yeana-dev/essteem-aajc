import React from 'react';
import HomeIcon from './HomeIcon';

function HomeIcons({ homeIcons }) {
	// console.log(props.homeIcons);
	console.log(homeIcons);
	return (
		<div className='homeIcons-cards-container'>
			{homeIcons.map((element) => {
				return <HomeIcon key={element.id} homeIcon={element} />;
			})}
		</div>
	);
}

export default HomeIcons;
