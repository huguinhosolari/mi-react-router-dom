import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Buscar from "./pages/Buscar";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";
import MasBuscado from "./pages/MasBuscado";

import ProductosLayout from "./pages/ProductosLayout";
import Categorias from "./pages/Categorias";
import Ofertas from "./pages/Ofertas";

export default function App() {
  return  (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Sección Productos con rutas anidadas */}
          <Route path="productos" element={<ProductosLayout />}>
            <Route index element={<Productos />} /> {/* /productos */}
            <Route path="categorias" element={<Categorias />} /> {/* /productos/categorias */}
            <Route path="ofertas" element={<Ofertas />} /> {/* /productos/ofertas */}
            <Route path=":id" element={<ProductoDetalle />} /> {/* /productos/:id */}
          </Route>
          
          <Route path="masbuscados" element={<MasBuscado />} />

          <Route path="buscar" element={<Buscar />} />

          {/* Ruta protegida */}
          <Route 
            path="perfil" 
            element={
              <RequireAuth>
                <Perfil />
              </RequireAuth>
            } 
          />
          
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}
