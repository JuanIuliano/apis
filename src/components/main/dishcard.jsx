import { div } from 'framer-motion/client'

export function DishCard() {
  return (
    <article className="bg-secondary flex-col max-w-fit px-8 py-3 justify-center rounded-xl">
      <img className="w-[200px] h-[200px]-" src="src\assets\hero.png" alt="test" />

      <footer>
        <h3 className="font-tittle font-bold text-textColor">
          nombre del plato
        </h3>
        <p className="font-body">$9999</p>
      </footer>
    </article>
  )
}
