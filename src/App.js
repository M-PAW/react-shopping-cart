import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />
			<ProductContext.Provider value={{ products, addItem }}>
			{/* Routes */}
			<Route exact path="/" component={Products} />
			</ProductContext.Provider>

			<CartContext.Provider value={{ cart }}>
			<Route path="/ShoppingCart" component={ShoppingCart}/>
			</CartContext.Provider>
			
		</div>
	);
}

export default App;
