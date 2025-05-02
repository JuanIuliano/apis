import { DishCard } from './dishcard'
import { Aside } from '../aside/aside'
import { Footer } from '../footer/footer'
import { Hero } from '../Hero'
import { MobileNav } from '../aside/mobileNav'
import { useStickyObserver } from '../../hooks/useIntersection'
import {useState, useEffect} from 'react'
import menuData from '../../assets/categories-dishes.json'

export function Main() {
  const { isSticky, stickyRef } = useStickyObserver()
  const [menu, setMenu] = useState([])

  useEffect(() => {
    setMenu(menuData);
  }, [])

  return (
    <div className="scroll-smoot">
      <Hero></Hero>
      <div className="flex-col md:flex md:flex-row flex-grow max-w-6xl mx-auto mt-10 relative">
        <div className="flex flex-col mx-auto mb-[10%] md:mb-0 sticky top-0">
          <Aside></Aside>
          <MobileNav></MobileNav>
        </div>
        <main className="bg-primary flex flex-col content-center border-r-2 border-transparent md:border-accent">
          {menu.map((categoryData, categoryIndex) => (
            <div key={categoryIndex} id={categoryData.category.toLowerCase()}>
              <h2 className='text-2xl text-center font-tittle text-text mb-5'>{categoryData.category}</h2>
              <div className="flex flex-row flex-wrap justify-center gap-10 mb-5">

                {categoryData.items.map((dish, dishIndex) => (
                  <DishCard key={dishIndex} dish={dish}></DishCard>
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
