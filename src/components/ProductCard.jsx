import { Link } from 'react-router-dom';

function CardItemList({titulo, categoria, preco, imagem, imagem1, imagem2, imagem3, imagem4 , desconto, precoAnterior }){

    return (
       <>
         <Link to='/product'  state={{ titulo: titulo, categoria: categoria,  preco: preco, desconto: desconto, precoAnterior: precoAnterior, imagem: imagem, imagem1: imagem1, imagem2: imagem2, imagem3: imagem3, imagem4: imagem4,  }} className='relative w-full px-1  flex flex-col gap-4 mb-5 hover:border-[1px] hover:border-pink-600 ' >
            <div className='w-full lg:h-80 bg-white' >
            {desconto && <p className="absolute top-4 left-2 md:top-6 md:left-3 bg-lime-200 py-1 px-2 rounded-xl text-sm" >{desconto}% OFF</p>}
                <img className='mt-4 w-full   ' src={imagem.url} alt="tenis" />
            </div>
            <div className='w-full flex flex-col '>
                <p className='text-xs' >{categoria}</p>
                <h4 className=' line-clamp-1 font-semibold' >{titulo}</h4>
                <p className='text-base font-semibold' >{precoAnterior && <del className='text-base text-gray-400' >${precoAnterior}</del>} ${preco}</p>
            </div>
        </Link>
       </>
    )

}



export default CardItemList;