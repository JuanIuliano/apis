import { DishCardAdmin } from '../components/admin/DishCardAdmin'
import { useState, useEffect } from 'react'
import menuData from '../assets/categories-dishes.json'
import { DishModal } from '../components/main/dishModal'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { apiFetch } from '../services/api';
import { jwtDecode } from 'jwt-decode'



export function MainAdmin() {
  const [dish_, setDish] = useState(null)
  const [menu, setMenu] = useState([])
  const [superAdmin, setSuperAdmin] = useState(false)
  const navigate = useNavigate();

  // obtener localstorage
  const token = localStorage.getItem("adminToken")
  const tokenDecoded = jwtDecode(token)
  // console.log(tokenDecoded)
  const id = tokenDecoded.id
  useEffect(() => {
    apiFetch(`/users/${id}`,
      {method: "GET"}
    )
      .then((user) => {
        setSuperAdmin(user.isSuperAdmin);
      })
      .catch((err) => {
        console.error(err);
        navigate("/admin");
      });
  }, [navigate]);

  useEffect(() => {
    apiFetch("/dishes")
      .then((res) => {
        setMenu(res);
      })
      .catch((err) => {
        console.error(err);
        navigate("/admin");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };
  console.log(menu)
  return (
    <div className='w-full mx-auto'>
      <div className='flex flex-row flex-wrap justify-between items-center'>
        <h3 className="font-semibold text-2xl ml-4">Panel platos</h3>
        <div className='flex flex-row justify-end p-4 gap-4'>
          <button className="bg-neutral-500 py-2 px-4 text-white rounded hover:bg-neutral-600" onClick={handleLogout}>Salir</button>
          {(superAdmin == true) ? <Link to="/admin/usuarios" className="bg-neutral-500 py-2 px-4 text-white rounded hover:bg-neutral-600">
            <button >Usuarios</button>
          </Link> : ''}

          <Link
              to="/admin/platos/new"
              className="bg-green-600 py-2 px-4 text-white rounded hover:bg-green-700"
          >
              <button>Agregar plato</button>
              
          </Link>
        </div>
      </div>
      
      <h2 className="text-3xl text-center p-6 mb-10">Administrar Platos</h2>
      <main className="flex flex-row flex-wrap justify-center gap-10 mb-5 border-r-2 border-transparent max-w-7xl mx-auto">
        
        {menu.map((data, index) => (
            <DishCardAdmin
                  key={index}
                  setDish={setDish}
                  dish={data}
            ></DishCardAdmin>
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
