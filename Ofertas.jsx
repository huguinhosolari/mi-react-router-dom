// src/pages/Ofertas.jsx
import { Link } from "react-router-dom";

const OFERTAS = [
  { id: "103", nombre: "Loft - Centro", precio: 98000, antes: 105000 },
  { id: "101", nombre: "Departamento - Escalón", precio: 120000, antes: 125000 },
];

export default function Ofertas() {
  return (
    <div>
      <h3>Ofertas</h3>
      <ul>
        {OFERTAS.map(o => (
          <li key={o.id}>
            <Link to={`/productos/${o.id}`}>
              {o.nombre} — <s>${o.antes.toLocaleString()}</s> → <strong>${o.precio.toLocaleString()}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
