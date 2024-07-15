import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import ProductListingPage from '../pages/ProductListingPage';

function RoutesApp(){
    return(
        <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/product-list' element={<ProductListingPage/>} />
        </Routes>
    )
}

export default RoutesApp;