import { DishCard } from './dishcard'
import { Aside } from '../aside/aside'
import { Footer } from '../footer/footer'
import { Hero } from '../Hero'

export function Main() {
  return (
    <div className="">
      <Hero></Hero>
      <div className="flex flex-row flex-grow max-w-6xl mx-auto min-h-screen mt-10">
        <div className="flex flex-col mx-auto flex-grow">
          <Aside></Aside>
        </div>
        <main className="bg-primary flex flex-col justify-center">
          <div className="flex flex-row flex-wrap justify-center gap-10 border-r-2 border-accent">
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  )
}
