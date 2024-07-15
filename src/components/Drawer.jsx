// src/components/Drawer.jsx
import React, { useState } from 'react';
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import logoIcon from '../assets/logo.png';

import { Link } from "react-router-dom";

function Drawer({ children, menu }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div>
            <IoMenu onClick={toggleDrawer} className='flex md:hidden text-2xl' />
            <div
                className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleDrawer}
            ></div>
            <div
                className={`fixed inset-y-0 z-50 left-0 w-64 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}
            >
                <div className="p-4">
                    <div className='w-full flex flex-row items-center justify-between' >
                        <img src={logoIcon} alt="Digital-Store" className="w-32 md:w-52" />
                        <IoCloseSharp onClick={toggleDrawer} className="text-2xl" />
                    </div>
                    {children}


                    {menu && <div className="h-screen flex flex-col " >
                        <div className="flex flex-col  mt-10  " >
                            <h6 className="font-semibold" >Páginas</h6>
                            <ul className=" flex flex-col mt-4 gap-3" >
                                <li><Link href="/" onClick={toggleDrawer} className={`text-lg cursor-pointer hover:underline text-gray-500 font-semibold hover:text-pink-600`}>Home</Link></li>
                                <li><Link to="/" onClick={toggleDrawer} className={`text-lg cursor-pointer hover:underline text-gray-500 font-semibold hover:text-pink-600`}>Produtos</Link></li>
                                <li><Link to="/" onClick={toggleDrawer} className={`text-lg cursor-pointer hover:underline text-gray-500 font-semibold hover:text-pink-600`}>Categorias</Link></li>
                                <li><Link to="/" onClick={toggleDrawer} className={`text-lg cursor-pointer hover:underline text-gray-500 font-semibold hover:text-pink-600`}>Meus Pedidos</Link></li>
                            </ul>
                        </div>
                        <p className="w-full h-[1px] bg-gray-700 rounded-full mt-7" ></p>
                        <div className="flex flex-row items-center gap-4 mt-6 " >
                            <a href="#" className="bg-pink-600 px-6 font-semibold text-center py-1 rounded-lg text-slate-50 hover:bg-pink-700 duration-200 " >Entrar</a>
                            <a href="#" className="underline text-base hover:text-rose-600 duration-200 text-center " >Cadastre-se</a>

                        </div>
                    </div>}



                    <p className='mt-7 font-bold text-xl mb-5' >Filtra por</p>
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
            </div>
        </div>
    );
};

export default Drawer;
