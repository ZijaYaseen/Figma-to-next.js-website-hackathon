import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Shop = () => {
  return (
    <div className='max-w-[1440vw] font-poppins w-full h-screen mt-[90px]' >

        {/* Shop 1st section */}

        <div className='bg-[url("/Rectangle1.svg")] bg-cover bg-center flex flex-col items-center justify-center h-[318px]'>
        <Image src={"/Meubel House_Logos-05.svg"}
        alt='logo'
        width={50}
        height={50}
        />

        <h1 className='font-medium text-5xl'>Shop</h1>
        

        </div>

    </div>
  )
}

export default Shop