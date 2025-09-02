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

export default function App() {
  return  (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Runtas anidadas bajo /productos */}
          <Route path="productos">
            <Route index element={<Productos />} />
            <Route path=":id" element={<ProductoDetalle />} />
          </Route>

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