"use client";
import React, { useState } from 'react';
import { HiMenu, HiX, HiSearch, HiShoppingCart } from 'react-icons/hi';
import { ModeToggle } from './ModeToggle';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-4 sticky top-0" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', zIndex: 1000 }}>
            {/* Desktop View */}
            <div className="hidden md:flex md:items-center md:justify-between w-full">
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold">Logo</div>
                    <div className="cursor-pointer">Products</div>
                </div>
                <div className="flex items-center justify-center flex-grow mx-4 relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="border rounded-md p-2 pl-8 w-full max-w-md" 
                        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--input)' }} 
                    />
                    <HiSearch className="absolute left-2 top-2 text-gray-400" />
                </div>
                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    <button className="relative">
                        <HiShoppingCart className="text-xl" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
                    </button>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex items-center justify-between w-full">
                <div className="flex items-center">
                    <button className="text-xl" onClick={toggleMenu}>
                        {isMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                    <div className="mx-auto text-xl font-bold">Logo</div>
                </div>

                {isMenuOpen && (
                    <div className="absolute right-0" style={{ backgroundColor: 'var(--card)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '0.5rem', borderRadius: 'var(--radius)', padding: '1rem' }}>
                        <div className="relative mb-2">
                            <input 
                                type="text" 
                                placeholder="Search" 
                                className="border rounded-md p-2 pl-8 w-full" 
                                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--input)' }} 
                            />
                            <HiSearch className="absolute left-2 top-2 text-gray-400" />
                        </div>
                        <div className="cursor-pointer">Products</div>
                        <div className="cursor-pointer">Sign Up</div>
                        <div className="flex items-center">
                            <ModeToggle />
                        </div>
                    </div>
                )}

                <button className="relative">
                    <HiShoppingCart className="text-xl" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
