import React, { useState } from 'react';

const Navbar = () => {

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
                        <a href='/products'>Products</a>
                    </li>
                    <li className={`text-white text-sm font-medium cursor-pointer list-none`}>
                        <a href='/'>Login</a>
                    </li>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;