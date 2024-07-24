import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product-list' element={<ProductListingPage />} />
                <Route path='/product' element={<ProductViewPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp;