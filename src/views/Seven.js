import React from 'react';
import './Seven.css';

import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Seven(){
	const history = useHistory();
	function gotoHome(){
		history.push('/')
	}

	return (
		<div className="Seven">
			<div className="BackButton" onClick={gotoHome}>
				<FontAwesomeIcon icon="arrow-left"/> &nbsp; Back
			</div>
			<div className="Container">
				<div className="Left">
				<h1>7! A Challenging Numbers Game</h1>
					<p>
						7! is a number-tiles game inspired by Threes, 
						created by Asher Vollmer, Greg Wohlwend, and Jimmy Hinson in 2014.
					</p>
					<p>
						7! has a comparatively more complex game play, 
						but gives the player more capability to plan ahead. 
						As a result, strategy becomes more integral while RNG plays a lesser role.
					</p>
				</div>
				<div>
					<br/>
					<iframe width="277" height="600" src="https://www.youtube.com/embed/pFsVnG3fTDY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</div>
	);
}