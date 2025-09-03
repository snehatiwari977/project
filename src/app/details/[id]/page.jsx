"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
  let {id}=useParams()
  let [data, setData] = useState([])
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`).then(a=>a.json()).then(b=>setData(b))
  },[])          
  return (
    <>
    <section>
      <div className="container mx-auto">
        <h2 className='text-2xl py-3'>All products</h2>
        <div className="grid grid-cols-2">
          <img src={data.image} alt="" />
          <div>
            <h2>{data.title}</h2>
            {data.description}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page
