import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import SectionDestaque from "../components/SectionDestaque";
import SectionList from "../components/SectionList";
import SectionOferta from "../components/SectionOferta";

function Home(){
    return(
        <div>
            
            <Gallery/>
            <SectionDestaque/>
            <SectionList/>
            <SectionOferta/>
            
        </div>
    )
}

export default Home;