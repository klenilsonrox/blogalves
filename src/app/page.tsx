import React from 'react'

const page = () => {
  return (
    <div className='bg-black h-screen w-screen '>
      <header className='text-white bg-slate-600 py-4 flex items-center justify-center'><p>Meu Blog</p></header>
      <div className='text-white flex-1  flex items-center justify-center w-screen h-[90%]'>
        <div className='max-w-md s-screen flex flex-col items-center '>
        <h1 className='text-[25px]'>Seja bem vindo ao </h1>
        <button className='border mx-auto py-2 px-6'><a href="blog"> ir para o BLOG</a></button>
        </div>
      </div>
    </div>
  )
}

export default page
