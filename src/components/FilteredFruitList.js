import React, { Component } from 'react';

const FilteredFruitList = (props) => {
	const list = !props.filter ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
	return (
	  <div>
	  	<ul className='fruit-list'>
			{list.map((item, index) => <li key={index}>{item.char}</li>)}
	  	</ul>
	  </div>
	)	
}

FilteredFruitList.defaultProps = {
	fruit: [],
	filter: null
}  

export default FilteredFruitList;
