import { div } from 'framer-motion/client'

export function DishCard() {
  return (
    <article className="bg-gray-400 flex-col max-w-fit px-8 py-3">
      <img src="https://picsum.photos/200" alt="test" />

      <footer>
        <h3>nombre del plato</h3>
        <p>precio</p>
      </footer>
    </article>
  )
}
