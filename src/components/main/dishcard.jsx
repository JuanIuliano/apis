export function DishCard({dish}) {
  const { name, description, ingredients, allergens, image, price_ars, price_usd } = dish
  return (
    <article className="bg-secondary flex-col max-w-fit px-8 py-3 justify-center rounded-xl">
      <img className="w-[200px] h-[200px]-" src="src\assets\hero.png" alt="test" />

      <div>
        <p className="font-tittle font-bold text-textColor">
          {name}
        </p>
        <p className="font-body">
          ARS {price_ars} USD {price_usd}
        </p>
      </div>
    </article>
  )
}
