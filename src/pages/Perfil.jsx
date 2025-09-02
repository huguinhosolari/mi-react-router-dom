import { useAuth } from "../auth/AuthContext";

export default function Perfil() {
const { user, logout } = useAuth();
return (
<section>
<h2>Perfil</h2>
<p>Bienvenido, <strong>{user?.name}</strong>.</p>
<button onClick={logout}>Cerrar sesión</button>
</section>
);
}