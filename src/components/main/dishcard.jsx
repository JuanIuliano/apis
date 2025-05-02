export function DishCard({ dish, setDish }) {
  const {
    name,
    description,
    ingredients,
    allergens,
    image,
    price_ars,
    price_usd,
  } = dish
  {
    /* Esta función recibe como parámetro el objeto dish que contiene todos los datos del plato y los utiliza para renderizar las dishCards
    Además recibe una función setDish que se ejecuta con el evento onClick
    esta función cambia el estado de dish_ en main, por el plato en cuestión (sirve para abrir las modals)*/
  }
  return (
    <article
      className="
    bg-secondary flex-col max-w-[240px] md:max-w-[268px] flex-wrap px-8 py-3 justify-center rounded-xl hover:cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:bg-[#E8E1D7] hover:border hover:border-accent/50 border-2 border-transparent
  "
      onClick={() => setDish(dish)}
    >
      {/* <img
        className="w-[200px] h-[200px] object-cover rounded-lg hover:brightness-110 transition"
        src= '/dishImages/carnes-blancas/milanesa-pollo-napolitana.png'
        alt="test"
      /> */}
      <img
        className="w-[200px] h-[200px] object-cover rounded-lg hover:brightness-110 transition"
        src={image}
        alt="test"
      />

      <footer className="mt-2">
        <h3 className="font-tittle font-bold text-textColor hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="font-body hover:font-semibold transition-all">
          ARS{price_ars} - USD{price_usd}
        </p>
      </footer>
    </article>
  )
}
