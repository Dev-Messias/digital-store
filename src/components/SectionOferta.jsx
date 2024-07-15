import Container from "./Container";
import tenis3 from '../assets/tenis3.png'
import ellipse from '../assets/Ellipse.png'

function SectionOferta() {
    return (
        <div className="w-full py-6 mt-0 bg-white lg:mt-10    " >
            <Container>
                <div className="w-full flex flex-col md:flex-row gap-3 md:gap-14 mb-0 md:mb-10 md:items-center" >
                    <div className="w-full flex flex-col items-center justify-center mt-16" >
                        <img src={tenis3} alt="Tenis oferta" className="z-10" />
                        <img src={ellipse} alt="ellipse" className="absolute w-[350px] lg:w-[450px]  " />

                    </div>
                    <div className="w-full flex flex-col  items-start gap-1 mt-10" >
                        <p className="text-[#F6AA1C]  lg:text-pink-600 font-semibold text-base" >Oferta especial</p>
                        <h4 className=" w-72 font-bold text-3xl lg:text-5xl lg:w-[500px] text-gray-700 " >Air Jordan edição de colecionador</h4>
                        <p className="text-base lg:text-lg text-gray-600 font-medium mt-4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cumque illo, omnis esse voluptate necessitatibus rem vel possimus veritatis ipsum porro exercitationem .</p>
                        <button className=" mt-5   bg-pink-600 hover:bg-pink-700 duration-200 cursor-pointer py-2 w-48 md:w-52 lg:w-52 text-slate-50 font-semibold rounded-lg text-base" >Ver Ofertas</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SectionOferta;