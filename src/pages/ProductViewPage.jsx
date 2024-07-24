import { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import { useLocation } from "react-router-dom";

function ProductViewPage(){
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return(
        <div>
            <ProductDetails/>
        </div>
    )
}

export default ProductViewPage;