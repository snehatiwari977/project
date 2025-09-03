import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
   <header className='bg-blue-500 py-5 text-3xl'>
    <div className="container mx-auto flex justify-between">
    <h1>Logo</h1>
    <h2>980000000</h2>
    </div>
   </header>
   <nav className='bg-red-500 py-4 text-white'>
    <div className="container mx-auto space-x-7">
    <Link href='/'>Home</Link>
    <Link href='/about'>About Us</Link>
    <Link href='/contact'>Contact us</Link>
    </div>
   </nav>
   </>
  )
}
 
export default Header
