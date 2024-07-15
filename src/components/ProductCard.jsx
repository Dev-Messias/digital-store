

function CardItemList({titulo, categoria, preco, imagem, desconto, precoAnterior }){
    return (
        <div className='relative w-full flex flex-col gap-4 mb-5 ' >
            <div className=' bg-white' >
            {desconto && <p className="absolute top-4 left-2 md:top-6 md:left-3 bg-lime-200 py-1 px-2 rounded-xl text-sm" >{desconto}% OFF</p>}
                <img className='mt-4 w-full hover:rotate-12 duration-300 ' src={imagem} alt="tenis" />
            </div>
            <div className='w-full flex flex-col '>
                <p className='text-xs' >{categoria}</p>
                <h4 className=' line-clamp-1 font-semibold' >{titulo}</h4>
                <p className='text-base font-semibold' >{precoAnterior && <del className='text-base text-gray-400' >${precoAnterior}</del>} ${preco}</p>
            </div>
        </div>
    )
}

export default CardItemList;