import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/main";
import LoginAdmin from "./pages/LoginAdmin";
import MainAdmin from "./pages/MainAdmin";
import DishForm from "./pages/DishForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Main />} />

        {/* Rutas admin */}
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/platos" element={<MainAdmin />} />
        <Route path="/admin/platos/new" element={<DishForm mode="create" />} />
        <Route path="/admin/platos/update/:id" element={<DishForm mode="update" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Main } from "./components/main/main";
// import Login from "./pages/Login";
// import DishList from "./pages/DishList";
// import DishForm from "./pages/DishForm";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Ruta pública */}
//         <Route path="/" element={<Main />} />
//         <Route path="/admin" element={<Login />} />

//         {/* Rutas protegidas */}
//         <Route
//           path="/admin/platos"
//           element={
//             <PrivateRoute>
//               <DishList />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/admin/platos/new"
//           element={
//             <PrivateRoute>
//               <DishForm mode="create" />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/admin/platos/update/:id"
//           element={
//             <PrivateRoute>
//               <DishForm mode="update" />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
