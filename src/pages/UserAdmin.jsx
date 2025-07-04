import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { apiFetch } from '../services/api';

export default function UserAdmin({ mode }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [user_, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [superAdmin, setSuperAdmin] = useState(true)

  useEffect(() => {
    apiFetch("/users")
      .then((res) => {
        setUsers(res);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        navigate("/admin");
      });
  }, []);

  const handleDelete = (id) => {
      if (window.confirm("¿Estás seguro de que quieres eliminar este administrador?")) {
        apiFetch(`/users/${id}`, {
          method: "POST"
        })
          .then(() => {
            alert("administrador eliminado correctamente.")
            window.location.reload()
          })
          .catch((error) => {
            console.error("Error al eliminar el administrador:", error)
            alert("Error al eliminar el administrador. Inténtalo de nuevo más tarde.")
          })
      }
    }

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  useEffect(() => {
    if (mode === "update" && id) {
      console.log("IDENTIFICADOR", id);
      apiFetch(`/users/${id}`)
        .then((data) => {
          setFormData({
            username: data.username || "",
            email: data.email || "",
            password: "", // No queremos mostrar la contraseña en el formulario por seguridad
          });
        })
        .catch((err) => {
          console.error(err);
          navigate("/admin/usuarios");
        });
    }
  }, [mode, id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
    };

    try {
      if (mode === "update") {
        await apiFetch(`/users/${id}`, {
          method: "PATCH",
          body: JSON.stringify(payload),
        });
      } else {
        await apiFetch("/users", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }

      navigate("/admin/usuarios");
    } catch (err) {
      console.error("Error al guardar:", err.message);
      alert("Error al guardar el usuario. Revisá los datos o intentá más tarde.");
    }
  };

  return (
    <>
    <div className='w-full mx-auto'>
      <div className="flex flex-row flex-wrap justify-between items-center">
        <h3 className="font-semibold text-2xl ml-4">Panel usuario</h3>
        <div className='flex flex-row p-4 gap-4 justify-end'>
          <button className="bg-neutral-500 text-white px-4 py-2 rounded hover:bg-neutral-600" onClick={handleLogout}>Salir</button>
          {superAdmin ? (
            <Link to="/admin/platos" className="bg-neutral-500 text-white px-4 py-2 rounded hover:bg-neutral-600">
              <button>Platos</button>
            </Link>
          ) : ''}

          <Link to="/admin/usuarios/new" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            <button>Agregar usuario</button>
          </Link>
      </div>
      </div>
      
      
      <h2 className="text-3xl text-center p-6 mb-10">Administradores</h2>
      <main className="flex flex-row flex-wrap justify-center gap-10 mb-5 border-r-2 border-transparent max-w-7xl mx-auto">
        {users.map((user, index) => (
          <div
            key={index}
            setUser={setUser}
            user={user} // Ahora pasamos datos de usuario
            className="bg-secondary flex flex-col max-w-[240px] md:max-w-[268px] flex-wrap px-8 py-3 justify-center rounded-xl transition-all duration-300 hover:bg-[#E8E1D7] hover:border-accent/50 border-2 border-transparent"
          >
            <p><span className="font-semibold">Usuario:</span> {user.username}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <div className="flex mt-2">
            <Link to={`/admin/usuarios/update/${user._id}`}>
                <button className="bg-neutral-500 text-textColor px-2 rounded-md hover:bg-neutral-600 transition">
                Editar
                </button>
            </Link>
            <button className="bg-red-500 text-textColor px-2 rounded-md hover:bg-red-600 transition ml-2" onClick={() => handleDelete(user._id)}>
                Eliminar
            </button>
            </div>
          </div>
        ))}
      </main>
    </div>
    </>
  );
}



