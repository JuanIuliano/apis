import { FaAnglesDown } from 'react-icons/fa6'

export function Hero() {
  return (
    <div className="bg-hero bg-cover bg-center opacity-85 min-h-svh flex flex-col justify-between align-middle border-b-2 border-accent">
      <div className='p-8'>
        <h1 className=" text-7xl text-center font-tittle text-primary font-extrabold mt-[10%]">
          DON PELA
        </h1>
        <h2 className='text-2xl text-center font-tittle text-primary font-extrabold mt-10'>Una experiencia gastronómica para tus sentidos.</h2>
        <p className="max-w-screen-sm place-self-center font-body text-primary text-center text-md mt-10">
          En Don Pela, cada plato es una obra pensada para elevar tus sentidos.
          <br></br> Somos un restaurante gourmet donde la creatividad del chef, la
          excelencia en los ingredientes y la precisión técnica se combinan para
          ofrecer una experiencia culinaria de alto nivel.
        </p>
      </div>
      <a href="#menu" className=''>
        <h2 className=" text-2xl text-center font-body text-primary mb-5">
          Deslizá para ver el menú
        </h2>
        <FaAnglesDown className="text-accent place-self-center mb-14 text-3xl hover:cursor-pointer animate-bounce" />
      </a>
    </div>
  )
}
