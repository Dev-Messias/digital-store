import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionProductList from "../components/sectionProductList";
import { useLocation } from "react-router-dom";

function ProductListingPage() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <SectionProductList />
        </div>
    )
}

export default ProductListingPage;