import { DishCard } from './dishcard'
import { Aside } from '../aside/aside'
import { Footer } from '../footer/footer'
import { Hero } from '../Hero'

export function Main() {
  return (
    <div className="scroll-smoot">
      <Hero></Hero>
      <div className="flex flex-row flex-grow max-w-6xl mx-auto min-h-screen mt-10 relative">
        <div className="flex flex-col mx-auto ">
          <Aside></Aside>
        </div>
        <main className="bg-primary flex flex-col content-center">
          <div className="flex flex-row flex-wrap justify-center gap-10 border-r-2 border-transparent md:border-accent">
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
            <DishCard></DishCard>
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
