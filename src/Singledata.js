import React , {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

export default function Singledata({match}) {

	const [item, setItem] = useState({});
	

	useEffect(() => {
		Item();
	}, [])

const Item=async()=>{
	const fetchItem= await axios(`https://reqres.in/api/unknown/${match.params.id}`);
	setItem(fetchItem.data.data);
}






	return (
		<div>

		{typeof item !== "undefined" ?
		
		<div className="singledata" style={{backgroundColor:item.color}}>
					<h1>{item.name}</h1>
					<h1>{item.year}</h1>	
					pentagon value
					<h1>{item.pantone_value}</h1>
			</div> 

		: "....loading please wait"  }

		</div>
	)
}