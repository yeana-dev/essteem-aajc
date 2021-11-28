import React from 'react';
// rsf

// use ES6 destructuring to access the keys of the props object by themselves
function HomeIcon({ homeIcon }) {
	// instead of props.homeIcon
	console.log(homeIcon);
	return (
		<div className='homeIcon'>
			<h2>{homeIcon.location}</h2>
			<img src={homeIcon.image} alt='homeIcon image' />
			<p>{homeIcon.statement}</p>
			<a href= {homeIcon.link}> Visit affiliate site: {homeIcon.location}</a>
		</div>
	);
}

export default HomeIcon;

	// location: 'Washington D.C.',
	// 	name: 'Asian Americans Advancing Justice |AAJC',
	// 	image:
	// 		'https://www.advancingjustice-aajc.org/themes/sunset/img/aajc_logo.svg',
	// 	statement:
	// 		'Fighting for civil rights and empowering Asian Americans to create a more just America for all.',
	// 	link: