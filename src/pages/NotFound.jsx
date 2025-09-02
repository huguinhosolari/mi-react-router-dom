import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2>404 — No encontrado</h2>
      <p>La ruta no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}
