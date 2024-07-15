import ProductCard from "./ProductCard";
import Container from "./Container";
import { FaArrowRightLong } from "react-icons/fa6";
import tenisItem from '../assets/listaItem/tenis2.png'
import  {Link}  from "react-router-dom";

const dataList =[
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

function SectionList() {
    return (
        <div className="w-full py-6 mt-0 lg:mt-16 " >
            <Container>
                <div className="w-full flex flex-col" >
                        <div className="w-full flex flex-row items-center justify-between mb-10" >
                            <h4 className="text-gray-700 text-xl font-semibold " >Coleções em destaque</h4>
                            <Link to="/product-list" className="flex flex-row items-center gap-1 text-pink-600 text-base font-medium ">Ver todos <FaArrowRightLong/> </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {dataList.map((item)=>(
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
            </Container>
        </div>
    )
}

export default SectionList;