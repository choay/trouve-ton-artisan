'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import SearchForm from './SearchFormHeader';
import Link from 'next/link';

const NavBar = ({ onSearch }) => {
    const [isClick, setIsClick] = useState(false);

    const handleToggleClick = () => {
        setIsClick(!isClick);
    };
    const [isSearchClick, setIsSearchClick] = useState(false);

    const handleSearchClick = () => {
        setIsSearchClick(!isSearchClick);
    };




    return (
        <>
            <nav className='navbar-nav w-full shadow-md flex items-center justify-between px-4'>
                
                {/* Logo */}
                <div className='flex justify-start'>
                    <Link href='/'>
                        <Image
                            src='/Logo.png'
                            alt="Logo"
                            width={200}
                            height={200}
                            priority
                        />
                    </Link>
                </div>


                {/* Liens de navigation */}
                <div className='hidden lg:flex'>
                    <ul className='flex gap-5'>
                        <li className='hover:border-b-2'><Link href='/categories/batiment'>Batiment</Link></li>
                        <li className='hover:border-b-2'><Link href='/categories/services'>Services</Link></li>
                        <li className='hover:border-b-2'><Link href='/categories/fabrication'>Fabrication</Link></li>
                        <li className='hover:border-b-2'><Link href='/categories/alimentation'>Alimentation</Link></li>
                    </ul>
                </div>
                <button className='btn  m-2 p-2 rounded  block cursor-pointer border' onClick={handleSearchClick}>
                        
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                        </svg>
                </button>


                {/* Menu déroulant pour les petits écrans */}
                <button className='btn m-2 p-2 rounded block cursor-pointer border lg:hidden' onClick={handleToggleClick}>
                       
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                </button>
                
                {isClick && (
                <div className='m-2 translate-y-36 transition-all ease-in-out delay-500 z-50 absolute right-0 bg-white border shadow border-t-0 rounded-b-md p-4 mr-0 border-r-0'>
                    <ul className='flex flex-col justify-end'>
                        <li className='m-2'><Link href='/categories/batiment'>Batiment</Link></li>
                        <li className='m-2'><Link href='/categories/services'>Services</Link></li>
                        <li className='m-2'><Link href='/categories/fabrication'>Fabrication</Link></li>
                        <li className='m-2'><Link href='/categories/alimentation'>Alimentation</Link></li>
                    </ul>
                </div>
                )}      
            </nav>
            {isSearchClick && (   
                    <div className='m-2'>
                        <SearchForm />
                    </div>
            )}
            </>
    );
};

export default NavBar;
