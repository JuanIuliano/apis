import {Link} from 'react-router-dom'
import React from 'react'
import { apiFetch } from '../../services/api'

export function DishCardAdmin({ dish, setDish }) {
  const {
    _id,
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

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este plato?")) {
      apiFetch(`/dishes/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Plato eliminado correctamente.")
          window.location.reload()
        })
        .catch((error) => {
          console.error("Error al eliminar el plato:", error)
          alert("Error al eliminar el plato. Inténtalo de nuevo más tarde.")
        })
    }
  }
  return (
    <article
      className="
    bg-secondary flex-col max-w-[240px] md:max-w-[268px] flex-wrap px-8 py-3 justify-center rounded-xl transition-all duration-300 hover:bg-[#E8E1D7] hover:border-accent/50 border-2 border-transparent
  "
      onClick={() => setDish(dish)}
    >
      {/* <img
        className="w-[200px] h-[200px] object-cover rounded-lg hover:brightness-110 transition"
        src= '/dishImages/carnes-blancas/milanesa-pollo-napolitana.png'
        alt="test"
      /> */}
      <img
        className="w-[200px] h-[200px] object-cover rounded-lg"
        src={image}
        alt="test"
      />

      <footer className="mt-2">
        <h3 className="font-tittle font-bold text-textColor">
          {name}
        </h3>
        <p className="font-body">
          ARS{price_ars} - USD{price_usd}
        </p>
      </footer>

      <div className="flex mt-2">
        <Link to={`/admin/platos/update/${_id}`}>
          <button className="bg-neutral-500 text-textColor px-2 py-1 rounded-md hover:bg-neutral-600 transition">
            Editar
          </button>
        </Link>
        <button className="bg-red-500 text-textColor px-2 py-1 rounded-md hover:bg-red-600 transition ml-2" onClick={() => handleDelete(_id)}>
          Eliminar
        </button>
      </div>
    </article>
  )
}
