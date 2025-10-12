"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import styles from "../../styles/styles.module.css";
import { usePathname } from 'next/navigation';
import { BiMenu } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg';



const NavLinks = [
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Expertise",
        path: "/expertise",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const ActionLink = {
    name: "Let’s Talk",
    path: "https://wa.me/2349012345678?text=Hello%20Aceline!%20I%27d%20love%20to%20discuss%20a%20branding%20project.",
    type: "button",
};


const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const pathname = usePathname();
    return (
        <div>
            <div className='fixed shadow-md md:shadow-lg border-b border-[#dd1e26] w-full rounded-3xl bg-[#fefbf6] text-[#1A1B1E] z-10'>
                <div className='flex items-center justify-between px-4 sm:px-15 md:px-20 py-4 sm:py-6'>
                    {/* Logo */}
                    <div>
                        <Link href="/"><Image src="/logo/img (0).png" width={180} height={100} alt='aceline logo' className='' /></Link>
                    </div>

                    {/* Links */}
                    <div className='w-full flex justify-end'>
                        {/* Desktop Links */}
                        <div className='hidden md:block w-[70%]'>
                            <nav className='flex items-center justify-between'>
                                <div className='flex items-center gap-20'>
                                    {NavLinks.map((link) => (
                                        <div key={link.name} className='inline font-[16px]'>
                                            <Link href={link.path}>
                                                <span className={`${styles.navLink} ${pathname === link.path ? styles.activeNavLink : ''}`}>
                                                    {link.name}
                                                </span>
                                            </Link>
                                        </div>
                                    ))}
                                </div>


                                <a
                                    href={ActionLink.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`cta-btn ${styles['cta-btn']}  text-[#F9FAFB] bg-[#dd1e26] rounded-lg shadow-sm px-4 py-2`}
                                >
                                    <span className="flex items-center justify-between gap-2"><FaWhatsapp size={18} color='#fefbf6' />
                                        {ActionLink.name}</span>
                                </a>

                            </nav>
                        </div>
                        {/* Mobile Links */}
                        <div className='md:hidden'>
                            {/* {!openNav && ( */}
                            <BiMenu size={35} onClick={() => setOpenNav(true)} />
                            {/* )} */}
                        </div>

                    </div>
                </div>
            </div>

            {/* When OpenNav is true */}
            <AnimatePresence>
                {openNav && (
                    <div className='fixed h-screen w-full bg-black/40 z-50 '>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className='relative w-[75%] bg-[#fefbf6] h-full rounded-r-2xl'>

                            {/* Header */}
                            <div className='flex items-center rounded-bl-3xl shadow-sm justify-between border-b border-[#dd1e26] px-2 py-4 bg-[#fefbf6]'><Image src="/logo/img (0).png" width={115} height={50} alt='aceline-logo' /> <CgClose size={30} color='#dd1e26' onClick={() => setOpenNav(false)} className='bg-white rounded-full p-1 shadow-sm shadow-gray-400' />
                            </div>
                            <div className='px-9 pt-6 w-full'>
                                <div>
                                    <h4 className='py-4 font-semibold text-lg'>Menu</h4>

                                    {/* Menu Links */}
                                    <div className={`w-full mb-5 rounded-lg p-2 text-center ${pathname === '/' ? 'text-[#f5f5f5] bg-[#dd1e26]' : 'bg-white shadow-sm'}`}>
                                        <Link href="/" className='w-full flex justify-center' onClick={() => setOpenNav(false)} >Home</Link>
                                    </div>

                                    {NavLinks.map((link) => (
                                        <div key={link.name} className={`font-[16px] mb-5 rounded-lg p-2 text-center  ${styles.navLink} ${pathname === link.path ? 'bg-[#dd1e26] shadow-md shadow-gray-500 text-[#f5f5f5]' : 'bg-white shadow-sm'}`}>
                                            <Link href={link.path}onClick={() => setOpenNav(false)} className='flex justify-center'>
                                                {link.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            {/* Action link */}
                            <div className="absolute bottom-6 left-0 w-full flex justify-center ">
                                <a
                                    href={ActionLink.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles['cta-btn']} bg-[#dd1e26] text-[#fefbf6] rounded-lg shadow-md px-4 py-2 flex items-center gap-2 w-[90%]`}
                                >
                                    <FaWhatsapp size={18} color="#fefbf6" />
                                    {ActionLink.name}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar;