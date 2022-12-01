import React,{ useState, useEffect,useContext}  from 'react';
import LogoImg from "../public/logo.png";

import Link from 'next/link';
import { getCategories } from '../services'
import Image from 'next/image';


const Header = () => {
    
        const [categories, setCategories] = useState([]);
    
        useEffect(() => {
          getCategories()
          .then((newCategories) => setCategories(newCategories))
        } ,[]);
   
  return (
    <div className='container mx-auto px-8 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left '>
                <Link href={`https://churchlegit.vercel.app/`}>
                    <div>
                    <span className='cursor-pointer font-bold text-2xl text-white'>
                        <Image
                         src={LogoImg} 
                         width={100}
                         height={100}
                         alt=" "
                         />
                    </span>
                    </div>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-4 align-middle text-white text-3xl ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header