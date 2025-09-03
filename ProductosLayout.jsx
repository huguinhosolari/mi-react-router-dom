import { NavLink, Outlet } from "react-router-dom";

export default function ProductosLayout() {

    const tab = ({ isActive }) => ({
    padding: "6px 10px",
    borderRadius: 8,
    textDecoration: "none",
    color: isActive ? "white" : "#374151",
    background: isActive ? "#111827" : "transparent",
    border: "1px solid #e5e7eb"
  });


    return (
        <section>
            <h2 style={{maginTop: 0}}>Productos</h2>
        
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <NavLink to="/productos" end style={tab}>Todos</NavLink> 
                <NavLink to="/productos/categorias" style={tab}>Categorías</NavLink> 
                <NavLink to="/productos/ofertas"  style={tab}>Ofertas</NavLink> 
            </div>
            <Outlet />
        </section>
    );
}