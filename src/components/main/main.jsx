import { DishCard } from './dishcard'
import { Aside } from '../aside/aside'
import { Footer } from '../footer/footer'
import { Hero } from '../Hero'
import { MobileNav } from '../aside/mobileNav'
import { useStickyObserver } from '../../hooks/useIntersection'
import { useState, useEffect } from 'react'
import menuData from '../../assets/categories-dishes.json'
import { DishModal } from './dishModal'
import { apiFetch } from '../../services/api'

// import { DishModal } from '../../../public/categories-dishes.json'

export function Main() {
  const { isSticky, stickyRef } = useStickyObserver()
  const [dish_, setDish] = useState(null)
  const [menu, setMenu] = useState({
    entrantes: [],
    carnesRojas: [],
    carnesBlancas: [],
    pescados: [],
    pastas: [],
    postres: [],
    bebidasSinAlcohol: [],
    bebidasConAlcohol: []
  })

  useEffect(() => {
    Promise.all([
      apiFetch("/dishes?category=Entrantes"),
      apiFetch("/dishes?category=Ensaladas"),
      apiFetch("/dishes?category=Platos Principales - Carnes Rojas"),
      apiFetch("/dishes?category=Platos Principales - Carnes Blancas"),
      apiFetch("/dishes?category=Platos Principales - Pescado"),
      apiFetch("/dishes?category=Pastas"),
      apiFetch("/dishes?category=Postres"),
      apiFetch("/dishes?category=Bebidas sin Alcohol"),
      apiFetch("/dishes?category=Bebidas con Alcohol"),

    ]).then(([entrantes, ensaladas, carnesRojas, carnesBlancas, pescados, pastas, postres, bebidasSinAlcohol, bebidasConAlcohol]) => {
      setMenu({
        entrantes,
        ensaladas,
        carnesRojas,
        carnesBlancas,
        pescados,
        pastas,
        postres,
        bebidasSinAlcohol,
        bebidasConAlcohol
      })
    })
  }, [])
  console.log(menu)
  return (
    <div className="scroll-smooth">
      <Hero></Hero>
      <div
        className="flex-col md:flex md:flex-row flex-grow mx-auto mt-10 relative justify-center"
        id="menu"
      >
        <div className="flex flex-col md:min-w-fit mb-[10%] md:mb-0 sticky top-0">
          <Aside></Aside>
          <MobileNav></MobileNav>
        </div>
        {dish_ && (
          <DishModal plato={dish_} onClose={() => setDish(null)}></DishModal>
        )}
        <main className="bg-primary flex flex-col content-center border-r-2 max-w-6xl p-8 border-transparent md:border-accent">
          {Object.entries(menu).map(([categoryKey, dishes]) => (
            <div key={categoryKey} id={categoryKey} className="scroll-mt-[100px]">
              <h2 className="text-3xl text-center font-tittle text-text mb-5">
                {categoryKey}
              </h2>
              <div className="flex flex-row flex-wrap justify-center gap-10 mb-5 border-r-2 border-transparent">
                {dishes.map((dish, dishIndex) => (
                  <DishCard
                    key={dishIndex}
                    setDish={setDish}
                    dish={dish}
                  />
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer></Footer>
    </div>
  )
}
