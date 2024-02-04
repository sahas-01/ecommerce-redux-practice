import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from "../assets/cart-logo-black.svg";

const Navbar = () => {
    const { cart } = useSelector((state) => state);
    console.log("cart", cart);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-blue-500 relative w-full z-50 px-10 md:px-64 sticky top-0 h-[72px] shadow-lg">
            <div className="mx-auto flex items-center justify-between py-4">
                <h1 className={`text-white text-xl font-bold cursor-pointer`}>
                    <a href='/'>ShopKart.</a>
                </h1>
                {
                    isMenuOpen && (
                        <div className="absolute top-[72px] left-0 w-full bg-navbarBg z-50">
                            <nav className="flex flex-col items-center gap-y-5 py-5">
                                <li className={`flex text-white text-sm font-medium cursor-pointer list-none`}>
                                    <a href='/products'>Products</a>
                                </li>
                                <li className={`text-white text-sm font-medium cursor-pointer list-none`}>
                                    <a href='/login'>Login</a>
                                </li>
                            </nav>
                        </div>
                    )
                }
                <nav className="hidden md:flex items-end gap-x-11">
                    <li className={`flex text-white text-sm font-medium cursor-pointer list-none`}>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className={`text-white text-sm font-medium cursor-pointer list-none`}>
                        {
                            localStorage.getItem('user') ?
                                <Link
                                    onClick={() => {
                                        localStorage.removeItem('user');
                                        window.location.href = '/';
                                    }}>Logout</Link> : <Link to='/login'>Login</Link>
                        }
                    </li>
                    {
                        localStorage.getItem('user') && (
                            <li className="relative flex items-center gap-x-3">
                                <Link to='/mycart' className="relative">
                                    <CartIcon className="h-5 w-5" />
                                    <span className="absolute -top-2 -right-5 inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-red-500 text-xs text-white">
                                        {cart.length}
                                    </span>
                                </Link>
                            </li>
                        )
                    }
                </nav>
            </div>
        </header>
    );
};

export default Navbar;