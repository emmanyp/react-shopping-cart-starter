import React from 'react';

function MyShoppingCart(props) {
const things = props.cart.map((elem, index) => {
	return (
		<li
			onClick={() => { props.removeFromCart(index);
			}}>
			{elem.name} - ${elem.price}
		</li>
	);
});
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{things}</ul>
    </div>
  );
}

export default MyShoppingCart;
