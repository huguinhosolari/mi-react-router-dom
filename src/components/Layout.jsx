import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    const navStyle = ({ isActive }) => ({
        padding: "8px 12px",
        borderRadius: "8px",
        textDecoration: "none",
        color: isActive ? "white" : "#333",
        backgroundColor: isActive ? "#2fb672" : "transparent"
    });

    return (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
            <nav style={{display: "flex", gap: 8, marginBottom: 16}}>
                <NavLink to="/" style={navStyle} end>Inicio</NavLink>
                <NavLink to="/productos" style={navStyle} end>Productos</NavLink>
                <NavLink to="/buscar" style={navStyle} end>Buscar</NavLink>
                <NavLink to="/perfil" style={navStyle} end>Perfil</NavLink>
            </nav>
            <Outlet />
        </div>
    );

}
