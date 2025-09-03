// src/pages/Categorias.jsx
import { Link } from "react-router-dom";

const CATS = [
  { id: "apt", nombre: "Apartamentos" },
  { id: "casa", nombre: "Casas" },
  { id: "oficina", nombre: "Oficinas" },
];

export default function Categorias() {
  return (
    <div>
      <h3>Categorías</h3>
      <ul>
        {CATS.map(c => (
          <li key={c.id}>
            <Link to={`/productos?cat=${c.id}`}>{c.nombre}</Link>
          </li>
        ))}
      </ul>
      <p style={{ color: "#6b7280" }}>
        (Ejemplo didáctico: al hacer clic, te lleva a /productos con ?cat=…)
      </p>
    </div>
  );
}
