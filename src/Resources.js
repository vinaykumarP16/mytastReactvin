import React,{useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {Link} from 'react-router-dom';

export default function Resources() {

	const [data, setData] = useState([]);


	useEffect(() => {
		fetchData();
	}, [])


	const fetchData=async()=>{
		const data = await axios('https://reqres.in/api/unknown');
		setData(data.data.data);
	}




	return (
		<div className="itemlist" >
		{data.map((item)=>
			<Link to={`/resources/${item.id}`}>
			<div key={item.id} className="item" style={{backgroundColor:item.color}}>
				<p >{item.name}</p>
				<p >{item.year}</p>
			</div>
			</Link>
			)}
		</div>
	)
}
