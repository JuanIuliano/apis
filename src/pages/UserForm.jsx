import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { apiFetch } from '../services/api';

export default function UserForm({ mode }) {
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
return(

  <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Crear nuevo usuario
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Nombre de usuario</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          {mode === "create" ? "Crear usuario" : "Actualizar usuario"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/admin/usuarios")}
          className="bg-neutral-500 text-white px-6 py-2 rounded hover:bg-neutral-600 m-2"
        >
          Cancelar
        </button>
      </form>
    </div>
  )
}
