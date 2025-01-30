import './index.css';
import Header from './components/Header.jsx';
import Home from './pages/HomePage/Home.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory.jsx';
import { Routes, Route } from 'react-router-dom';
import CartContextProvider from './contexts/CartContext.jsx';

function App() {
    return (
        <CartContextProvider>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/history' elemtn={<PurchaseHistory />} />
            </Routes>
        </CartContextProvider>
    );
}

export default App;
