import Container from "./Container";
import { IoMenu, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import logoIcon from '../assets/logo.png';
import Drawer from "./Drawer";

function Header() {
    return (
        <div className="w-full py-5 bg-white shadow-xl " >
            <Container>
                <div className="w-full flex  flex-row items-center justify-between" >
                    <Drawer className="block md:hidden" />
                    <img src={logoIcon} alt="Digital-Store" className="w-32 md:w-52" />
                    <div className=" hidden md:flex w-full  flex-row items-center justify-center gap-3  " >
                        <div className="flex flex-row bg-slate-100 items-center justify-center  h-10 rounded-xl w-[60%] md:w-[55%] lg:w-[60%]  " >
                            <input type="text" name="pesquisar" placeholder="Pesquisar" className="bg-transparent h-10 w-full px-2" />
                            <IoSearchOutline className="mr-4 text-gray-400 text-xl" />

                        </div>
                        <div className=" flex flex-row items-center justify-center gap-6 ml-5" >
                            <a href="#" className="underline text-base hover:text-rose-600 duration-200 " >Cadastre-se</a>
                            <a href="#" className="bg-rose-500 px-6 font-semibold py-1 rounded-lg text-slate-50 hover:bg-rose-600 duration-200 " >Entar</a>
                        </div>
                    </div>
                    <IoCartOutline className="text-rose-500 text-3xl md:text-4xl" />
                </div>
                <div className="mt-8 hidden md:block" >
                    <nav>
                        <ul className="w-full flex flex-row text-lg font-medium gap-9 text-slate-600" >
                            <li><a href="#" className="cursor-pointer hover:underline hover:text-rose-500 " >Home</a></li>
                            <li><a href="#" className="cursor-pointer hover:underline hover:text-rose-500 " >Produtos</a></li>
                            <li><a href="#" className="cursor-pointer hover:underline hover:text-rose-500 " >Categorias</a></li>
                            <li><a href="#" className="cursor-pointer hover:underline hover:text-rose-500 " >Meus Pedidos</a></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    )
}

export default Header;