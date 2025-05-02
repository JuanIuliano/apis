import { FaAnglesDown } from 'react-icons/fa6'

export function Hero() {
  return (
    <div className="bg-hero bg-cover bg-center min-h-svh flex flex-col justify-between align-middle border-b-2 border-accent">
      <h1 className=" text-7xl text-center font-tittle text-text font-extrabold mt-[10%]">
        DON PELA
      </h1>
      <p className="max-w-screen-sm place-self-center font-body text-black font-normal text-center text-m">
        En Don Pela, cada plato es una obra pensada para elevar tus sentidos.
        <br></br> Somos un restaurante gourmet donde la creatividad del chef, la
        excelencia en los ingredientes y la precisión técnica se combinan para
        ofrecer una experiencia culinaria de alto nivel.<br></br> Nuestro menú,
        en constante evolución, fusiona técnicas contemporáneas con productos
        estacionales y sabores cuidadosamente equilibrados.<br></br> Cada
        detalle cuenta: desde la presentación impecable hasta el maridaje
        perfecto, pasando por una ambientación sofisticada que acompaña sin
        distraer.<br></br> Don Pela no es solo una cena, es un viaje
        gastronómico donde buscamos sorprender, emocionar y dejar una huella
        memorable en cada visita.
      </p>
      <a href="#menu">
        <h2 className=" text-2xl text-center font-body text-text mb-5">
          Desliza para ver el menú
        </h2>
        <FaAnglesDown className="text-accent place-self-center mb-14 text-3xl hover:cursor-pointer animate-bounce" />
      </a>
    </div>
  )
}
