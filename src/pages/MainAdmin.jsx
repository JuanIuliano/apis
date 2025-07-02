import { DishCardAdmin } from '../components/admin/DishCardAdmin'
import { useState, useEffect } from 'react'
import menuData from '../assets/categories-dishes.json'
import { DishModal } from '../components/main/dishModal'
import {Link} from 'react-router-dom'

export function MainAdmin() {
  const [dish_, setDish] = useState(null)
  const [menu, setMenu] = useState([])

  useEffect(() => {
    setMenu(menuData)
  }, [])

  return (
      <div className='mx-auto'>
        <Link
            to="/admin"
            className = "ml-4"
        >
            <button className="bg-neutral-500 text-white px-4 py-2 rounded hover:bg-neutral-600">Salir</button>
        </Link>
        <Link
            to="/admin/platos/new"
        >
            <button className="bg-green-600 text-white m-8 p-2 rounded hover:bg-green-500">Agregar plato</button>
            
        </Link>
        <main className="flex flex-col content-center max-w-6xl px-8">
          {menu.map((categoryData, categoryIndex) => (
            <div
              key={categoryIndex}
              id={categoryData.category.toLowerCase()}
              className="scroll-mt-[100px]"
            >
              <h2 className="text-3xl text-center font-tittle text-text mb-5">
                {categoryData.category}
              </h2>
              <div className="flex flex-row flex-wrap justify-center gap-10 mb-5 border-r-2 border-transparent">
                {categoryData.items.map((dish, dishIndex) => (
                  <DishCardAdmin
                    key={dishIndex}
                    setDish={setDish}
                    dish={dish}
                  ></DishCardAdmin>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    
  )
}

export default MainAdmin;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {DishCardAdmin} from "../components/admin/DishCardAdmin";
// import { apiFetch } from '../services/api';

// export default function MainAdmin() {
//   const [dishes, setDishes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     apiFetch("/platos")
//       .then(setDishes)
//       .catch((err) => {
//         console.error(err);
//         navigate("/admin");
//       });
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     navigate("/admin");
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Platos disponibles</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Cerrar sesión
//         </button>
//       </div>

//       <button
//         onClick={() => navigate("/admin/platos/new")}
//         className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
//       >
//         Agregar nuevo plato
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {dishes.map((dish) => (
//           <DishCardAdmin key={dish._id} dish={dish} />
//         ))}
//       </div>
//     </div>
//   );
// }
