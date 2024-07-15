import Gallery from "../components/Gallery";
import Header from "../components/Header";
import SectionDestaque from "../components/SectionDestaque";
import SectionList from "../components/SectionList";

function Home(){
    return(
        <div>
            <Header/>
            <Gallery/>
            <SectionDestaque/>
            <SectionList/>
        </div>
    )
}

export default Home;