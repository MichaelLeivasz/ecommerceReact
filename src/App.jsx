import './index.css';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Home from './pages/HomePage/Home.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory.jsx';
import { Routes, Route } from 'react-router-dom';
import { CartContext } from './contexts/CartContext.js';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (productId) => {
        const updatedCart = {
            ...cartItems,
            [productId]: (cartItems[productId] ?? 0) + 1,
        };
        setCartItems(updatedCart);
    };

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartContext.Provider
            value={{ isCartOpen, toggleIsCartOpen, cartItems, addToCart }}
        >
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/history' elemtn={<PurchaseHistory />} />
            </Routes>
        </CartContext.Provider>
    );
}

export default App;
