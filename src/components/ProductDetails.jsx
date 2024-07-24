import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Container from './Container';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useLocation } from 'react-router-dom';
import { products } from '../dados/index';


function ProductDetails() {
    const location = useLocation();
    const { state } = location;
    const { titulo, categoria, preco, imagem } = state || {}; // Garantir que state existe
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [activeItem, setActiveItem] = useState();
    const items = Array.from({ length: 5 });

    function handleSetActiveItem(item) {
        setActiveItem(item);
    }

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="w-full py-14  " >
            <Container>
                <div className='w-full  flex flex-col lg:flex-row gap-8 justify-between' >
                    <div className='w-full  lg:w-[600px] flex-1   ' >

                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                                'marginBottom': '10px',
                            }}
                            slidesPerView={1}
                            spaceBetween={0}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {items.map((_, index) => (
                                <SwiperSlide key={index} >
                                    <div className={`w-full  h-96 lg:h-[587px] rounded-lg flex flex-row items-center justify-center ${imagem.bg}`} >
                                        <img src={imagem.url} className='w-96 ' />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper

                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className='mySwiper'
                        >
                            {items.map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div id="swpSlid" className={`w-full rounded-lg  h-14 md:h-24 flex flex-row items-center justify-center ${imagem.bg}`} >
                                        <img src={imagem.url} className='w-12 md:w-24' />
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                    <div className='w-full flex-1 flex flex-col gap-1'>
                        <div>
                            <h4 className=' text-2xl md:text-4xl lg:text-4xl font-bold mb-2' >{titulo}</h4>
                            <p className=' text-sm md:text-base text-gray-500' >Casual | Nike | REF:38416711</p>
                        </div>
                        <div className='w-full flex flex-row items-center gap-2 mt-2'>
                            <div className='flex flex-row items-center text-amber-500 text-[17px] gap-1' >
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStarHalf />
                                <IoIosStarOutline />
                            </div>
                            <div className='flex flex-row items-center  gap-1' >
                                <p className='flex flex-row  items-center justify-center bg-amber-500 px-4 rounded-lg text-white text-base gap-1' >4.7<TiStarFullOutline className='text-xs' /></p>
                                <p className='text-base text-gray-400' >(90 avaliações)</p>
                            </div>

                        </div>
                        <div className='mt-2' >
                            <p className='text-2xl font-semibold' ><span className='text-base text-gray-400 font-medium'>R$ </span>{preco} <del className='text-base text-gray-400 font-medium' >220</del></p>
                        </div>
                        <div className='mt-4' >
                            <p className='font-semibold text-gray-400 text-base' >Descrição do produto</p>
                            <p className='text-gray-500 mt-2 w-full md:w-[600px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                        <div className='flex flex-col mt-6' >
                            <p className='text-gray-400  font-medium text-base' >Tamanho</p>
                            <div className='flex flex-row gap-3 py-2' >
                                <div onClick={() => handleSetActiveItem('39')} className={` ${activeItem === '39' ? 'bg-pink-600 border-pink-600 text-white' : 'bg-white border-[1px] border-gray-400 '} flex flex-row items-center justify-center w-8 h-8  cursor-pointer p-6  hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-200 font-medium  rounded-lg`} >
                                    <p className='text-base' >39</p>
                                </div>
                                <div onClick={() => handleSetActiveItem('40')} className={` ${activeItem === '40' ? 'bg-pink-600 border-pink-600 text-white' : 'bg-white border-[1px] border-gray-400 '} flex flex-row items-center justify-center w-8 h-8 cursor-pointer  p-6  hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-200 font-medium  rounded-lg`} >
                                    <p className='text-base' >40</p>
                                </div>
                                <div onClick={() => handleSetActiveItem('41')} className={` ${activeItem === '41' ? 'bg-pink-600 border-pink-600 text-white' : 'bg-white border-[1px] border-gray-400 '} flex flex-row items-center justify-center w-8 h-8 cursor-pointer  p-6  hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-200 font-medium  rounded-lg`} >
                                    <p className='text-base' >41</p>
                                </div>
                                <div onClick={() => handleSetActiveItem('42')} className={` ${activeItem === '42' ? 'bg-pink-600 border-pink-600 text-white' : 'bg-white border-[1px] border-gray-400 '} flex flex-row items-center justify-center w-8 h-8 cursor-pointer p-6  hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-200 font-medium  rounded-lg`} >
                                    <p className='text-base' >42</p>
                                </div>
                                <div onClick={() => handleSetActiveItem('43')} className={` ${activeItem === '43' ? 'bg-pink-600 border-pink-600 text-white' : 'bg-white border-[1px] border-gray-400 '} flex flex-row items-center justify-center w-8 h-8 cursor-pointer p-6  hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-200 font-medium  rounded-lg`} >
                                    <p className='text-base' >43</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col ' >
                            <p className='text-gray-400  font-medium text-base' >Cor</p>
                            <div className='flex flex-row gap-3 py-2' >
                                <div className=' w-10 h-10 flex flex-row items-center justify-center  bg-white  border-[1px]  hover:border-pink-600  rounded-full' >
                                    <p className='w-9 h-9 rounded-full bg-cyan-900' >

                                    </p>
                                </div>
                                <div className=' w-10 h-10 flex flex-row items-center justify-center  bg-white  border-[1px]  hover:border-pink-600  rounded-full' >
                                    <p className='w-9 h-9 rounded-full bg-red-500' >

                                    </p>
                                </div>
                                <div className=' w-10 h-10 flex flex-row items-center justify-center  bg-white  border-[1px]  hover:border-pink-600  rounded-full' >
                                    <p className='w-9 h-9 rounded-full bg-stone-800' >

                                    </p>
                                </div>
                                <div className=' w-10 h-10 flex flex-row items-center justify-center  bg-white  border-[1px]  hover:border-pink-600  rounded-full' >
                                    <p className='w-9 h-9 rounded-full bg-violet-950' >

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex flex-row text-white mt-6' >
                            <button className='bg-amber-500 hover:bg-amber-600 duration-150 px-10 py-2 rounded-lg' >COMPRAR</button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col mt-16 lg:mt-16" >
                    <div className="w-full flex flex-row items-center justify-between mb-10" >
                        <h4 className="text-gray-700 text-xl font-semibold " >Coleções em destaque</h4>
                        <Link to="/product-list" className="flex flex-row items-center gap-1 text-pink-600 text-base font-medium ">Ver todos <FaArrowRightLong /> </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.map((item) => (
                            <ProductCard key={item.id}
                                titulo={item.titulo}
                                categoria={item.categoria}
                                preco={item.preco}
                                imagem={item.imagem}
                                desconto={item.desconto}
                                precoAnterior={item.precoAnterior}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetails;