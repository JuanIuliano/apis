import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api";

export default function LoginAdmin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!user || !password) {
      setError("Ambos campos son obligatorios.");
      return;
    }

    try {
      
      const response = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: user, password }),
      });

      localStorage.setItem("adminToken", response.token); // Guardar JWT en localstorage
      navigate("/admin/platos"); // Redirigir al panel
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary">
      <form
        onSubmit={handleLogin}
        className="bg-secondary p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block mb-1 font-medium">Usuario</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="admin"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-400 text-white w-full py-2 rounded hover:bg-blue-500"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
