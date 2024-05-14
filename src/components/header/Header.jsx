import React from 'react'
import "./Header.scss"
import Link from 'next/link'

import { IoSearch } from "react-icons/io5";

import logo from "@/assets/logo.png"

import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <nav className="nav container">
                <div className="nav__list">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/all-shop"}>Shop All</Link>
                    <Link href={"/blog"}>Blog</Link>
                </div>
                <Link href={"/"} className='nav__logo'>
                    <Image src={logo} />
                </Link>
                <div className="nav__end">
                    <Link href={"/about"}>About Us</Link>
                    <div className="nav__end__search__box">
                        <input type="text" placeholder='Search Product' />
                        <button><IoSearch /></button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header