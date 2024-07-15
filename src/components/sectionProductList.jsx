import ProductCard from "./ProductCard";
import Container from "./Container";
import { FaArrowRightLong } from "react-icons/fa6";
import tenisItem from '../assets/listaItem/tenis2.png'
import Drawer from "./Drawer";

const dataList = [
    {
        id: 1,
        titulo: 'K-Swiss V8 - Masculino',
        categoria: 'Tênis',
        preco: 100,
        img: tenisItem,
        desconto: 30,
        precoAnterior: 200
    },

    {
        id: 2,
        titulo: 'K-Swiss V8 - Masculino',
        categoria: 'Tênis',
        preco: 100,
        img: tenisItem,
        precoAnterior: 200
    },
    {
        id: 3,
        titulo: 'K-Swiss V8 - Masculino',
        categoria: 'Tênis',
        preco: 100,
        img: tenisItem,
        precoAnterior: 200
    },
    {
        id: 4,
        titulo: 'K-Swiss V8 - Masculino',
        categoria: 'Tênis',
        preco: 100,
        img: tenisItem,
        desconto: 40,
        precoAnterior: 500
    },
    {
        id: 5,
        titulo: 'K-Swiss V8 - Masculino',
        categoria: 'Tênis',
        preco: 100,
        img: tenisItem,
        precoAnterior: 200
    },
    {
        id: 6,
        titulo: 'K-Swiss V8 - Masculino',
        categoria: 'Tênis',
        preco: 100,
        img: tenisItem,
        desconto: 20,
        precoAnterior: 260
    },
    {
        id: 7,
        titulo: 'K-Swiss V8 - Masculino',
        categoria: 'Tênis',
        preco: 100,
        img: tenisItem,
        precoAnterior: 200
    },
    {
        id: 8,
        titulo: 'K-Swiss V8 - Masculino',
        categoria: 'Tênis',
        preco: 100,
        img: tenisItem,
        precoAnterior: 200
    }
]

function SectionProductList() {
    return (
        <div className="w-full py-6 mt-0 lg:mt-16 " >
            <Container>
                <div className="w-full flex flex-col" >
                    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between mb-10" >
                        <div className="md:w-full">
                            <p className="font-semibold text-black text-base">Resultados para "Tênis" - <span className="text-gray-500">389 produtos</span></p>
                        </div>
                        <div className="md:w-full flex flex-row items-center justify-center  gap-3 mb-5 md:mb-0" >
                            <div className=" w-full flex flex-row md:justify-end" >
                                <select id="Select" className="w-64 lg:w-96  border-2 py-2 px-2" >
                                    <option disabled selected >Ordenar por</option>
                                    <option  >Menor preço</option>
                                    <option  >Mais relevantes</option>
                                </select>
                            </div>
                            <div className="block md:hidden" >
                                <Drawer filter={true} menu={false} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full   flex flex-row  gap-3 " >
                        <div className="w-72 md:h-[650px] hidden md:flex flex-col bg-white px-10 py-5" >
                            <p className=' font-bold text-xl mb-2 mt-2' >Filtra por</p>
                            <p className="w-full h-[1px] bg-gray-700 rounded-full mb-3" ></p>
                            <ul className='accent-rose-500' >

                                <li className='font-semibold text-lg mb-2' >Marca</li>
                                <li><input type="checkbox" /> <label >Adidas</label></li>
                                <li><input type="checkbox" /> <label >Calenciaga</label></li>
                                <li><input type="checkbox" /> <label >K-Swiss</label></li>
                                <li><input type="checkbox" /> <label >Nike</label></li>
                                <li><input type="checkbox" /> <label >Puma</label></li>
                            </ul>

                            <ul className='accent-rose-500 mt-4' >
                                <li className='font-semibold text-lg mb-2' >Categoria</li>
                                <li><input type="checkbox" /> <label >Esporte e lazer</label></li>
                                <li><input type="checkbox" /> <label >Casual</label></li>
                                <li><input type="checkbox" /> <label >Ultilitário</label></li>
                                <li><input type="checkbox" /> <label >Corrida</label></li>
                            </ul>

                            <ul className='accent-rose-500 mt-4' >
                                <li className='font-semibold text-lg mb-2' >Gênero</li>
                                <li><input type="checkbox" /> <label >Masculino</label></li>
                                <li><input type="checkbox" /> <label >Feminino</label></li>
                                <li><input type="checkbox" /> <label >Unissex</label></li>
                            </ul>

                            <ul className='accent-rose-500 mt-4' >
                                <li className='font-semibold text-lg mb-2' >Estado</li>
                                <li>
                                    <input type="radio" name="estado" value="Novo" id="novo" />
                                    <label htmlFor="regular" className='ml-2'>Novo</label>
                                </li>
                                <li>
                                    <input type="radio" name="estado" value="Usado" id="usado" />
                                    <label htmlFor="usado" className='ml-2'>Usado</label>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {dataList.map((item) => (
                                <ProductCard key={item.id}
                                    titulo={item.titulo}
                                    categoria={item.categoria}
                                    preco={item.preco}
                                    imagem={item.img}
                                    desconto={item.desconto}
                                    precoAnterior={item.precoAnterior}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SectionProductList;