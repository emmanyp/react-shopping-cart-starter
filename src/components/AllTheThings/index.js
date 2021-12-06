import React from 'react';

const AllTheThings = (props) => {
  const things = props.productsArr.map((elem, index) => {
		return( 
 
        <li onClick= {()=>{props.addToCart(index)}}>
          {elem.name} - ${elem.price}
          </li>
)
	});
  return (
		<div className='AllTheThings'>
			<h2>Put these in your cart!</h2>
			<ul> {things}</ul>
			<br />
		</div>
	);
}

export default AllTheThings;
