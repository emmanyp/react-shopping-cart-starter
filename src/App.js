// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

export default function App() {
	const [products, setProducts] = useState(productsArr);
	const [cart, setCart] = useState([]);

	// create an addToCart function that takes in a product as a param
	const addToCart = (index) => {
		setCart([
			...cart,
			{
				name: products[index].name,
				price: products[index].price,
			},
		]);
		console.log(cart);
	};
	// using the ...spread operator add the product to the cart array

	// create an removeFromCart function that takes in an index as a param
	// using the ...sp
	// using Array.filter remove create a new array where that item is removed
	const removeFromCart = ( index) => {
		 const filteredCart = cart.filter(
				(_, idx) => idx !== index)
      setCart([
        ...filteredCart
      ])
      console.log('remove', filteredCart);
	};

	return (
		<div className='App'>
			<h1>Big Time Shopping</h1>
			<Form />
			<div className='products'>
				<AllTheThings productsArr={productsArr} addToCart={addToCart} />
				<MyShoppingCart cart={cart} removeFromCart={removeFromCart} />
			</div>
		</div>
	);
}
