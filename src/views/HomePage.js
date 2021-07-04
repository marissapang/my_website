import React from 'react';
import './HomePage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomePage(){

	return (
		<div className="HomePage">
			<h1 className="Name">MARISSA PANG</h1>
			<span className="Contact">
				&thinsp; marissapang@live.com
				<OrangeBullet/>
				<a target="_blank" href="https://linkedin.com/in/marissapang">
					linkedin.com/in/marissapang
				</a>
				<OrangeBullet/>
				<a target="_blank" href="https://github.com/marissapang">
					github.com/marissapang
				</a>
			</span>
			<div className="Divider"/>
			<div className="Bio">
				I like to build useful tools and games. 
				Have some thoughts on my projects? Got an idea you want to see built? 
				Reach out!
			</div>
			<div className="Divider"/>

			<h3>THE LATEST</h3>
			<ul>
				<li>
					<a className="ProjectName" target="_blank" href="https://f1plans.com">
						F1Plans
					</a>
					: An exceptional phone service tailored for international students
				</li>
			</ul>
			<div style={{height:"30px"}}/>

			<h3>PAST PROJECTS</h3>
			<ul>
				<li>
					<a className="ProjectName" target="_blank" href="https://f1helper.io">
						F1Helper 
					</a>
					: Automated immigration services for students on the F1 visa
				</li>
				<li>
					<a className="ProjectName" href="/seven">
						7! A Challenging Numbers Game
					</a>
					: Number puzzle game inspired by Threes from Sirvo
				</li>
				<li>
					<a className="ProjectName" target="_blank" href="http://c19trends.com">
						C19Trends
					</a>
					: Minimalist application for personalized Covid-19 dashboards

				</li>
			</ul>
			<div style={{height:"30px"}}/>

			<h3>WORK IN PROGRESS</h3>
			<ul>
				<li>
					<a className="InactiveProjectName">
						CleanCourse Inc
					</a>
					: High-efficiency carbon offset services for individuals
				</li>
				<li>
					<a className="InactiveProjectName">
						monch
					</a>
					: Curated, pinterest-style recipe platform; 
					feedback on&nbsp;
					<a target="_blank" href="https://xd.adobe.com/view/1895c725-55ae-4f18-bda2-76d658a375ba-4dc6/">
						initial design
					</a>  
					&nbsp;welcomed
				</li>
				<li>
					<a className="InactiveProjectName">
						WALK NYC
					</a>
					: Gamified walking
				</li>
			</ul>
			

		</div>
	);

}

function OrangeBullet(){
	return (
		<span style={{color: "#EF5F30"}}>
			&nbsp; &bull; &nbsp;
		</span>
	);
}