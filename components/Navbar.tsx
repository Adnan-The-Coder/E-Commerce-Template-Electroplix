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
                    <div className="relative w-full max-w-md">
                        <input 
                            type="text" 
                            placeholder="Search for products..." 
                            className="border rounded-md p-2 pr-10 w-full transition-all duration-200 ease-in-out" 
                            style={{ 
                                borderColor: 'rgba(255, 255, 255, 0.3)', 
                                backgroundColor: 'var(--input)', 
                                borderWidth: '1px' 
                            }} 
                            onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)'}
                            onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                            // onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.3)'}
                        />
                        <HiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
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

                {/* Drawer Menu */}
                <div 
                    className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                    onClick={toggleMenu}
                />
                <div 
                    className={`fixed top-0 right-0 w-2/3 h-full shadow-lg transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
                    style={{ backgroundColor: 'var(--drawer-background)', color: 'var(--drawer-foreground)', zIndex: 1100 }} // Higher z-index
                >
                    <div className="flex flex-col items-center p-4">
                        <div className="relative mb-4 w-full">
                            <input 
                                type="text" 
                                placeholder="Search" 
                                className="border rounded-md p-2 pr-10 w-full transition-all duration-200 ease-in-out" 
                                style={{ 
                                    borderColor: 'rgba(0, 0, 0, 0.3)', 
                                    backgroundColor: 'var(--input)', 
                                    borderWidth: '1px' 
                                }} 
                                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.7)'} 
                                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.3)'} 
                            />
                            <HiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <div className="cursor-pointer py-2">Products</div>
                        <div className="cursor-pointer py-2">Sign Up</div>
                    </div>
                </div>
            </div>

            {/* Icons in their original positions */}
            <div className="flex items-center space-x-4 md:hidden">
                <ModeToggle />
                <button className="relative">
                    <HiShoppingCart className="text-xl" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
