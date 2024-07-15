
import Container from './Container'
import logoWhite from '../assets/logo-white.png'

function Footer() {
    return (
        <div className='w-full py-6 mt- bg-[#1f1f1f] mb-auto ' >
            <Container>
                <div className='w-full flex flex-col md:flex-row gap-8 py-6  lg:justify-between ' >
                    <div className='flex flex-col gap-5' >
                        <img src={logoWhite} alt="Digital-Store" className='w-48' />
                        <p className='text-gray-200 text-base w-full md:w-60 lg:w-72' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem,   saepe incidunt explicabo cupiditate.</p>
                    </div>
                    <div className='flex flex-row gap-10 lg:gap-36 lg:justify-between' >
                        <div>
                            <h6 className='text-lg font-bold text-gray-200 mb-3' >Informação</h6>
                            <ul className='flex flex-col gap-3' >
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Sobre Drip Store</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Segurança</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Wishlist</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Blog</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Trabalhe Conosco</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Meus Pedidos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='text-lg font-bold text-gray-200 mb-3' >Informação</h6>
                            <ul className='flex flex-col gap-3' >
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Camisetas</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Calças</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Bonés</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Headphones</a></li>
                                <li><a href="#" className='text-base text-gray-100 hover:text-pink-500 hover:underline cursor-pointer '>Tênis</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-lg font-bold text-gray-200 mb-3' >Contato</h6>
                        <p className='text-gray-200 text-base w-full lg:w-80' >Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>

                        <p className='text-gray-200 text-base mt-4' >(85) 3051-3411</p>
                    </div>
                    
                </div>
                <hr/>
                <div className='w-full flex flex-row items-center justify-center mt-7 mb-3' >
                    <p className='text-xs text-gray-300' >© 2024 Digital College</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;