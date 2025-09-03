"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
  let [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(a=>a.json()).then(b=>setData(b))
  },[])
  return (
    <>
    <section>
      <div className="container mx-auto">
        <h2 className='text-2xl py-3'>All products</h2>
        <div className="grid grid-cols-4">
        {data.map((a)=>(
          <div>
            <img src={a.image} alt="" />
            <p><Link href={`/details/${a.id}`}>{a.title} </Link></p>
          </div>
        ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default page
