import { Link } from "react-router-dom";

const DATA = [
  { id: "101", nombre: "Departamento - Escalón", precio: 125000 },
  { id: "102", nombre: "Apartamento - Zona 10", precio: 165000 },
  { id: "103", nombre: "Loft - Centro", precio: 98000 }
];

export default function Productos() {
  return (
    <section>
      <h2>Productos</h2>
      <ul>
        {DATA.map(p => (
          <li key={p.id}>
            <Link to={`/productos/${p.id}`}>
              {p.nombre} — ${p.precio.toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
