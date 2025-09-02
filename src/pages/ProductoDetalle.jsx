import { useParams, Link } from "react-router-dom";

export default function ProductoDetalle() {
  const { id } = useParams();
  return (
    <section>
      <h2>Detalle de producto</h2>
      <p>ID tomado de la URL: <code>{id}</code></p>
      <Link to="/productos">← Volver</Link>
    </section>
  );
}
