import Container from "./Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import tenis1 from '../assets/tenis1.png'
import ornament from '../assets/ornament.png'


const data = [
    { id: '1', url: tenis1, ornament: ornament },
    { id: '2', url: tenis1, ornament: ornament },
    { id: '3', url: tenis1, ornament: ornament },
]

function Gallery() {
    return (
        <div className="w-full py-6 bg-neutral-100 " >
            <Container>
                <div >
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={false}
                        autoplay={{ delay: 6000 }}
                        className="w-full"
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id} >
                                <div className="flex flex-col-reverse lg:flex-row items-center justify-center" >
                                    <div className="w-full flex flex-col justify-center lg:items-start items-center gap-2 md:gap-4" >
                                        <p className="text-pink-600 text-base -mt-5 md:-mt-24 lg:-mt-0 lg:text-[#F6AA1C] md:text-lg" >Melhores ofertas personalizadas</p>
                                        <h2 className="font-bold text-4xl md:text-6xl md:w-[500px] text-center lg:text-start w-80" >Queima de estoque Nike 🔥</h2>
                                        <p className="text-slate-600 text-center w-full text-base md:text-lg lg:text-start md:w-[400px] ">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                        <button className="mb-10 mt-2  bg-pink-600 hover:bg-pink-700 duration-200 cursor-pointer py-2 w-72 md:w-96 lg:w-52 text-slate-50 font-semibold rounded-lg text-base" >Ver Ofertas</button>
                                    </div>
                                    <div>
                                        <img src={item.url} alt="tenis" className="w-full lg:w-[1500px] lg:-ml-20 " />
                                        <img src={item.ornament} alt="tenis" className="absolute top-2 right-0 -z-20" />
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default Gallery;