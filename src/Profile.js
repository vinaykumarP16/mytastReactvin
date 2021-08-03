import React from 'react';
import './App.css';

const Profile = () => {
	return (
		<div className="myprofile">
			<h1>Welcome to my profile</h1>
			<h3 style={{color:"yellow",letterSpacing:'3px'}}>VINAY KUMAR P</h3>
			<div className="mylinks">
				<a href="https://www.linkedin.com/in/vinay-kumar-p-20766214b/"><i class="fab fa-linkedin"></i></a>
				<a href="https://github.com/vinaykumarP16"><i class="fab fa-github"></i></a>
				<a href="https://vinaykumarp1695.netlify.app/"><i class="fas fa-user"></i></a>
			</div>
			<div className="myprojects">
			<a href="https://drive.google.com/file/d/1w-lyKQ1iRz2FsIHMlo_Kl2cQ9nXPVC1r/view?usp=sharing">Resume</a>
			<a href="https://v-tube-vin.netlify.app/">youtube clone Website</a>
			<a href="https://vindemosite.netlify.app/">React website</a>
			</div>
		</div>
	)
}

export default Profile;