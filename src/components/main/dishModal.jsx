import { useEffect } from 'react'
import { FaTimes, FaLeaf } from 'react-icons/fa'

export function DishModal({ plato, onClose }) {
  console.log(plato)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'auto')
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      ></div>

      <article className="relative bg-primary border-2 border-accent rounded-xl z-[101] p-6 w-11/12 md:max-w-[60%] max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-accent hover:text-secondary transition-colors"
        >
          <FaTimes size={24} />
        </button>
        <div className='flex flex-row justify-evenly gap-4 flex-wrap'>
          <figure className="w-3/3 aspect-[4/3] xs:w-2/3 xl:w-2/5">
            <img
              src={plato.image || 'https://picsum.photos/800/600?food'}
              alt={plato.name}
              className="w-full h-full object-cover rounded-lg border border-secondary"
            />
          </figure>
          <div className='w-max-1/2'>
            <header className="mb-4 border-b border-accent pb-4">
              <div className="flex flex-row flex-wrap gap-4 justify-between">
                <h2 className="text-3xl font-tittle text-accent font-bold pt-3 md:pt-0">
                  {plato.name}
                </h2>
                <div className="flex gap-6 pr-6 mt-0">
                  <div className="text-center">
                    <p className="font-body text-xl text-black font-normal">
                      ${plato.price_ars}
                    </p>
                    <p className="font-body text-accent">ARS</p>
                  </div>
                  <div className="text-center">
                    <p className="font-body text-xl text-black font-normal">
                      ${plato.price_usd}
                    </p>
                    <p className="font-body text-accent">USD</p>
                  </div>
                </div>
              </div>
            </header>

            <section className="space-y-6">
              <div>
                <p className="text-text font-body text-m leading-relaxed">
                  {plato.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-tittle text-xl text-accent font-semibold mb-1 flex items-center">
                    <FaLeaf className="mr-2" /> Ingredientes
                  </h3>
                  <p>{plato.ingredients.length > 0 ? plato.ingredients.join(', ') : 'No contamos con los ingredientes'}</p>
                </div>

                <div>
                  <h3 className="font-tittle text-xl text-accent font-semibold mb-1">
                    Alérgenos
                  </h3>
                  <p className="font-body text-text">
                    {plato.allergens.length > 0 ? plato.allergens.join(', ') : 'No contiene alérgenos comunes'}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        {/* <header className="mb-4 border-b border-accent pb-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-3xl font-tittle text-accent font-bold pt-3 md:pt-0">
              {plato.name}
            </h2>
            <div className="flex gap-6 pr-6 mt-0">
              <div className="text-center">
                <p className="font-body text-xl text-black font-normal">
                  ${plato.price_ars}
                </p>
                <p className="font-body text-accent">ARS</p>
              </div>
              <div className="text-center">
                <p className="font-body text-xl text-black font-normal">
                  ${plato.price_usd}
                </p>
                <p className="font-body text-accent">USD</p>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <div>
            <p className="text-text font-body text-m leading-relaxed">
              {plato.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-tittle text-xl text-accent font-semibold mb-1 flex items-center">
                <FaLeaf className="mr-2" /> Ingredientes
              </h3>
              <p>{plato.ingredients.length > 0 ? plato.ingredients.join(', ') : 'No contamos con los ingredientes'}</p>
            </div>

            <div>
              <h3 className="font-tittle text-xl text-accent font-semibold mb-1">
                Alérgenos
              </h3>
              <p className="font-body text-text">
                {plato.allergens.length > 0 ? plato.allergens.join(', ') : 'No contiene alérgenos comunes'}
              </p>
            </div>
          </div>
        </section> */}

        <footer className="mt-8 pt-1 border-t border-accent flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-accent text-primary font-tittle rounded-lg border-2 hover:bg-white hover:text-black hover:border-accent hover:font-bold"
          >
            Cerrar
          </button>
        </footer>
      </article>
    </div>
  )
}
