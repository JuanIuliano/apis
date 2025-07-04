import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiFetch } from "../services/api";

// Categorías permitidas (enum)
const CATEGORY_OPTIONS = [
  "Entrantes",
  "Ensaladas",
  "Platos%20principales%20-%20Carnes%20Rojas",
  "Platos principales - Carnes Blancas",
  "Platos principales - Pescado",
  "Pastas",
  "Postres",
  "Bebidas sin Alcohol",
  "Bebidas con Alcohol"
];
//no escuche
export default function DishForm({ mode }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ingredients: [""],
    allergens: [""],
    image: "",
    price_ars: "",
    price_usd: "",
    category: "", // Categoría única seleccionada
  });

  useEffect(() => {
    if (mode === "update" && id) {
      console.log("IDENTIFICADOR",id)
      apiFetch(`/dishes/${id}`)
        .then(data => {
          setFormData({
            name: data.name || "",
            description: data.description || "",
            ingredients: data.ingredients?.length ? data.ingredients : [""],
            allergens: data.allergens?.length ? data.allergens : [""],
            image: data.image || "",
            price_ars: data.price_ars || "",
            price_usd: data.price_usd || "",
            category: data.categories?.[0] || "",
          });
        })
        .catch((err) => {
          console.error(err);
          navigate("/admin/platos");
        });
    }
  }, [mode, id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e, field, index) => {
    const updated = [...formData[field]];
    updated[index] = e.target.value;
    setFormData(prev => ({ ...prev, [field]: updated }));
  };

  const handleAddItem = (field) => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      categories: [formData.category], // transformamos category única a array para backend
      price_ars: parseInt(formData.price_ars),
      price_usd: parseInt(formData.price_usd)
    };

    try {
      if (mode === "update") {
        await apiFetch(`/dishes/${id}`, {
          method: "PATCH",
          body: JSON.stringify(payload),
        });
      } else {
        await apiFetch("/dishes", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }

      navigate("/admin/platos");
    } catch (err) {
      console.error("Error al guardar:", err.message);
      alert("Error al guardar el plato. Revisá los datos o intentá más tarde.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {mode === "create" ? "Crear nuevo plato" : "Actualizar plato"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block mb-1 font-medium">Nombre del plato</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Categoría</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Seleccionar categoría</option>
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {["ingredients", "allergens"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-medium capitalize">
              {field === "ingredients" ? "Ingredientes" : "Alérgenos"}
            </label>
            {formData[field].map((item, index) => (
              <input
                key={index}
                value={item}
                onChange={(e) => handleArrayChange(e, field, index)}
                className="w-full border rounded p-2 mb-2"
                placeholder={`${field} ${index + 1}`}
              />
            ))}
            <button
              type="button"
              className="text-sm text-blue-500"
              onClick={() => handleAddItem(field)}
            >
              + Agregar {field === "ingredients" ? "ingrediente" : "alérgeno"}
            </button>
          </div>
        ))}

        <div>
          <label className="block mb-1 font-medium">URL de imagen</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Precio en ARS</label>
            <input
              type="number"
              name="price_ars"
              value={formData.price_ars}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Precio en USD</label>
            <input
              type="number"
              name="price_usd"
              value={formData.price_usd}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          {mode === "create" ? "Crear plato" : "Actualizar plato"}
        </button>

        <button
            type="button"
            onClick={() => navigate("/admin/platos")}
            className="bg-neutral-500 text-white px-6 py-2 rounded hover:bg-neutral-600 m-2"
        >
            Cancelar
        </button>
      </form>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { apiFetch } from "../services/api";

// const CATEGORY_OPTIONS = [
//   "Entradas",
//   "Plato principal",
//   "Postres",
//   "Bebidas",
//   "Vegano",
//   "Sin TACC",
// ];

// export default function DishForm({ mode }) {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     ingredients: [""],
//     allergens: [""],
//     image: "",
//     price_ars: "",
//     price_usd: "",
//     category: "",
//   });

//   useEffect(() => {
//     if (mode === "update" && id) {
//       apiFetch(`/dishes/${id}`)
//         .then(data => {
//           setFormData({
//             name: data.name || "",
//             description: data.description || "",
//             ingredients: data.ingredients?.length ? data.ingredients : [""],
//             allergens: data.allergens?.length ? data.allergens : [""],
//             image: data.image || "",
//             price_ars: data.price_ars || "",
//             price_usd: data.price_usd || "",
//             category: data.categories?.[0] || "",
//           });
//         })
//         .catch((err) => {
//           console.error(err);
//           navigate("/admin/platos");
//         });
//     }
//   }, [mode, id, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleArrayChange = (e, field, index) => {
//     const updated = [...formData[field]];
//     updated[index] = e.target.value;
//     setFormData(prev => ({ ...prev, [field]: updated }));
//   };

//   const handleAddItem = (field) => {
//     setFormData(prev => ({ ...prev, [field]: [...prev[field], ""] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       categories: [formData.category], // transformamos category única a array para backend
//     };

//     try {
//       if (mode === "update") {
//         await apiFetch(`/platos/${id}`, {
//           method: "PUT",
//           body: JSON.stringify(payload),
//         });
//       } else {
//         await apiFetch("/platos", {
//           method: "POST",
//           body: JSON.stringify(payload),
//         });
//       }

//       navigate("/admin/platos");
//     } catch (err) {
//       console.error("Error al guardar:", err.message);
//       alert("Error al guardar el plato. Revisá los datos o intentá más tarde.");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">
//         {mode === "create" ? "Crear nuevo plato" : "Actualizar plato"}
//       </h1>

//       <form onSubmit={handleSubmit} className="space-y-6">

//         <div>
//           <label className="block mb-1 font-medium">Nombre del plato</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Descripción</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//         </div>

//         {["ingredients", "allergens"].map((field) => (
//           <div key={field}>
//             <label className="block mb-1 font-medium capitalize">
//               {field === "ingredients" ? "Ingredientes" : "Alérgenos"}
//             </label>
//             {formData[field].map((item, index) => (
//               <input
//                 key={index}
//                 value={item}
//                 onChange={(e) => handleArrayChange(e, field, index)}
//                 className="w-full border rounded p-2 mb-2"
//                 placeholder={`${field} ${index + 1}`}
//               />
//             ))}
//             <button
//               type="button"
//               className="text-sm text-blue-500"
//               onClick={() => handleAddItem(field)}
//             >
//               + Agregar {field === "ingredients" ? "ingrediente" : "alérgeno"}
//             </button>
//           </div>
//         ))}

//         <div>
//           <label className="block mb-1 font-medium">URL de imagen</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label className="block mb-1 font-medium">Precio en ARS</label>
//             <input
//               type="number"
//               name="price_ars"
//               value={formData.price_ars}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block mb-1 font-medium">Precio en USD</label>
//             <input
//               type="number"
//               name="price_usd"
//               value={formData.price_usd}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Categoría</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border rounded p-2"
//             required
//           >
//             <option value="">Seleccionar categoría</option>
//             {CATEGORY_OPTIONS.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex gap-4 mt-4">
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//           >
//             {mode === "create" ? "Crear plato" : "Actualizar plato"}
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate("/admin/platos")}
//             className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400"
//           >
//             Cancelar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
