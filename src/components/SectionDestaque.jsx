import { useState, useEffect } from 'react'
import Container from "./Container";
import camisaStar from '../assets/camisaStar.png';
import tenisColecao from '../assets/tenisColecao.png';
import foneColecao from '../assets/foneColecao.png';
import CardColecao from "./CardColecao";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineHeadphones } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { PiPantsDuotone } from "react-icons/pi";
import { PiBaseballCapLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";

const itemCard = [
    {
        id: 1,
        titulo: 'Novo drop Supreme',
        desconto: '30',
        img: camisaStar
    },
    {
        id: 2,
        titulo: 'Coleção Adidas',
        desconto: '30',
        img: tenisColecao
    },
    {
        id: 3,
        titulo: 'Novo Beats Bass',
        desconto: '30',
        img: foneColecao
    }
]

const dataDestaque = [
    {
        id: 1,
        icone: IoShirtOutline,
        titulo: 'Camisetas'
    },
    {
        id: 2,
        icone: MdOutlineHeadphones,
        titulo: 'Phones'
    },
    {
        id: 3,
        icone: PiPantsDuotone,
        titulo: 'Calças'
    },
    {
        id: 4,
        icone: PiBaseballCapLight,
        titulo: 'Bonés'
    },
    {
        id: 5,
        icone: GiConverseShoe,
        titulo: 'Tênis'
    },
]

function SectionDestaque() {
    const [sliderPreView, setSliderPreView] = useState(3.5);
    const [sB, setSB] = useState(1)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 450 && window.innerWidth < 890) {
                setSliderPreView(5);
                setSB(1)
            } else if (window.innerWidth > 890) {
                setSliderPreView(5);
                setSB(-100)
            } else {
                setSliderPreView(3.5)
                setSB(1)
            }


        }

        handleResize()

        window.addEventListener("resize", handleResize);//sempre que atela mudar chamar a função

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])

    return (
        <div className="w-full py-6  " >
            <Container>
                <div className="w-full flex flex-col gap-2" >
                    <div className="mt-10" >
                        <h4 className="text-gray-700 text-xl font-semibold mb-4" >Coleções em destaque</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >

                        {itemCard.map((item) => (

                            <CardColecao key={item.id} titulo={item.titulo} desconto={item.desconto} imagem={item.img} />
                        ))}
                    </div>
                </div>

                <div>
                    <div className="w-full mt-10 lg:mt-20 flex flex-row items-start lg:items-center lg:justify-center " >
                        <h4 className="text-gray-700 text-xl font-semibold mb-4" >Coleções em destaque</h4>
                    </div>

                    <div className='mt-1 md:mt-2 lg:mt-4 ' >
                        <Swiper

                            spaceBetween={sB}
                            slidesPerView={sliderPreView}
                            className=' w-full lg:w-[700px]'
                        >

                            {dataDestaque.map((item) => (
                                <SwiperSlide key={item.id} >
                                    <div className=" bg-transparent flex flex-col items-cente justify-center " >
                                        <div className=" flex flex-col items-center" >
                                            <div className="bg-white rounded-full p-2 shadow-lg mb-2   " >
                                                {<item.icone className="text-3xl lg:text-5xl text-gray-400 hover:text-pink-600 cursor-pointer duration-200" />}
                                            </div>
                                            <div>
                                                <p className="text-sm" >{item.titulo}</p>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default SectionDestaque;