import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <section>
        <h1>Inicio</h1>
        <p>Esta SPA usa React Router DOM para rutas, params, queries y rutas protegidas</p>
        <button onClick={() => navigate("/productos")}>Ver productos</button>
        </section>    
    );

}