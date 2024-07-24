import { useState } from "react";
import Container from "./Container";
import { IoMenu, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import logoIcon from '../assets/logo.png';
import Drawer from "./Drawer";



import { Link } from "react-router-dom";


function Header() {
    const [active, setActive] = useState('');
    const [openSearch, setOpenSearch] = useState(false)

    function handleSearch(item) {
        setOpenSearch(item)
    }

    function handleSetActive(item) {
        setActive(item);
    }

    return (
        <div className="w-full py-6 bg-white shadow-xl " >
            <Container>

                <div className="w-full flex  flex-row items-center justify-between" >
                    <Drawer className="block md:hidden" menu={true} />
                    <img src={logoIcon} alt="Digital-Store" className="w-32 md:w-52" />
                    <div className=" hidden md:flex w-full  flex-row items-center justify-center gap-3  " >
                        <div className="flex flex-row bg-slate-100 items-center justify-center  h-11 rounded-xl w-[60%] md:w-[50%] lg:w-[70%]  " >
                            <input type="text" name="pesquisar" placeholder="Pesquisar" className="bg-transparent h-10 w-full px-2 focus:outline-none" />
                            <IoSearchOutline className="mr-4 text-gray-400 text-xl" />

                        </div>
                        <div className=" flex flex-row items-center justify-center gap-6 ml-5 md:ml-2" >
                            <a href="#" className="underline text-base hover:text-rose-600 duration-200 " >Cadastre-se</a>
                            <Link to="#" className="bg-pink-600 px-6 font-semibold py-1 rounded-lg text-slate-50 hover:bg-pink-700 duration-200 " >Entrar</Link>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center " >
                        <IoSearchOutline className={`${openSearch === true ? 'text-pink-500' : 'text-gray-500'} block md:hidden text-2xl cursor-pointer`} onClick={() => handleSearch(!openSearch)} />
                        <IoCartOutline className="text-pink-500 text-3xl md:text-4xl cursor-pointer" />
                    </div>
                </div>
                {openSearch && <div className="flex md:hidden flex-row bg-slate-100 items-center justify-center  h-11 rounded-xl w-full mt-5 " >
                    <input type="text" name="pesquisar" placeholder="Pesquisar" className="bg-transparent h-10 w-full px-2 focus:outline-none" />
                    <IoSearchOutline className="mr-4 text-gray-400 text-xl" />

                </div>}
                <div className="mt-8 hidden md:block" >
                    <nav>
                        <ul className="w-full flex flex-row text-lg font-medium gap-9 " >
                            <li><Link to="/" className={`${active === 'home' ? 'text-pink-600 underline' : 'text-slate-600'} cursor-pointer hover:underline hover:text-pink-600`} onClick={() => handleSetActive('home')} >Home</Link></li>
                            <li><Link to="/product-list" className={`${active === 'produtos' ? 'text-pink-600 underline' : 'text-slate-600'} cursor-pointer hover:underline hover:text-pink-600`} onClick={() => handleSetActive('produtos')} >Produtos</Link></li>
                            <li><Link to="/" className={`${active === 'categorias' ? 'text-pink-600 underline' : 'text-slate-600'} cursor-pointer hover:underline hover:text-pink-600`} onClick={() => handleSetActive('categorias')} >Categorias</Link></li>
                            <li><Link to="/" className={`${active === 'pedidos' ? 'text-pink-600 underline' : 'text-slate-600'} cursor-pointer hover:underline hover:text-pink-600`} onClick={() => handleSetActive('pedidos')} >Meus Pedidos</Link></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    )
}

export default Header;