import React, {useState, useEffect} from 'react';
import {getCategories} from '../services';
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  
  const firstCategories = categories.slice(0,2)
  const secondCategories = categories.slice(2,4)
  console.log(categories)

  return (
    <>
    <div className='flex justify-between md:justify-center bg-black h-20 items-center '>
      <div className='hidden md:flex md:visible'>
        {firstCategories.map((category, index) => (
          <Link href={`/category/${category.slug}`} key={index}><h2 className='cursor-pointer text-xl font-thin md:pr-10 lg:pr-16 text-white hover:text-gray-400 ease-in-out duration-200'>{category.name}</h2></Link>
        ))}
      </div>
      <div className='flex justify-center items-center h-full w-60 text-center bg-white leading-9'>
      <Link href='/'><h1 className='text-4xl font-semibold tracking-widest cursor-pointer'>BLOGO</h1></Link>
      </div>
      {!mobileOpen ? (<GiHamburgerMenu className='text-white md:hidden text-4xl mr-5 cursor-pointer' onClick={(() => setMobileOpen(!mobileOpen))}/>) : (<RiCloseLine className='text-white md:hidden text-4xl mr-5 cursor-pointer' onClick={(() => setMobileOpen(!mobileOpen))}/>)}
      <div className='hidden md:flex text-white text-xl font-thin invisible md:visible'>
        {secondCategories.map((category, index) => (
          <Link href={`/category/${category.slug}`} key={index}><h2 key={index} className='md:pl-10 lg:pl-16 cursor-pointer text-xl font-thin text-slate-400 hover:text-gray-400 ease-in-out duration-200'>{category.name}</h2></Link>
        ))}
      </div>
    </div>
    {mobileOpen ? (
      <div className='bg-white w-1/2 h-max smooth-transition duration-200 absolute top-20'>
        
        {categories.map((category, index) => (
          <Link href={`/category/${category.slug}`} key={index}><h2 className='p-5 cursor-pointer text-xl font-thin md:pr-10 lg:pr-16 text-black hover:text-gray-400 ease-in-out duration-200'>{category.name}</h2></Link>
        ))}
          
      </div>
    ) : (null)}
    </>
  )
}

export default Header