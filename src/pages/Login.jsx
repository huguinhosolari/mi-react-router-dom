import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("Usuario");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/perfil";

  return (
    <section>
      <h2>Login</h2>
      <label>
        Nombre:&nbsp;
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div style={{ marginTop: 8 }}>
        <button
          onClick={() => {
            login(name);
            navigate(from, { replace: true });
          }}
        >
          Ingresar
        </button>
      </div>
    </section>
  );
}
