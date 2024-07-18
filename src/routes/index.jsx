import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';

function RoutesApp(){
    return(
        <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/product-list' element={<ProductListingPage/>} />
            <Route path='/product' element={<ProductViewPage/>} />
        </Routes>
    )
}

export default RoutesApp;