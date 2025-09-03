import  { Link, useLocation } from 'react-router-dom';

const LABELS = {
    productos: "Productos",
  categorias: "Categorías",
  ofertas: "Ofertas",
  buscar: "Buscar",
  perfil: "Perfil", 
  login: "Login",
};

export default function Breadcrumbs() {
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);

    //Construir pares (label, path) acumulando los segmentos
    const crumbs = [{ label: "Inicio", path: "/" }];
    let pathAcc = "";
    segments.forEach((seg, i) => {
        pathAcc +=- `/${seg}`;
        let label = LABELS[seg];

        // Etiqueta para las dinámicas en /products/:id
        if (!label && segments[i - 1] === "productos") {
            label = `Producto ${decodeURIComponent(seg)}`;
        }

        // Fallback: capitaliza el segmento si no esta mapeado

        if (!label) label = seg.charAt(0).toUpperCase() + seg.slice(1);

        crumbs.push({ label, path: pathAcc });

    });

    return (
        <nav aria-label="breadcrumbs" style={ styles.wrap }>
            {crumbs.map((c, idx) => {
                const isLast = idx === crumbs.length - 1;
                return (
                    <span key={c.path}>
                        {isLast ? (
                            <span style={styles.current}>{c.label}</span>
                        ) : (
                            <Link to={c.path} style={styles.link}>{c.label}</Link>
                            )}
                            {!isLast && <span style={styles.sep}>/</span>}
                    </span>
                );
            })}
        </nav>
    );

}

const styles = {
  wrap: { margin: "4px 0 12px", color: "#6b7280", fontSize: 14 },
  link: { color: "#2563eb", textDecoration: "none" },
  sep: { margin: "0 6px", color: "#9ca3af" },
  current: { color: "#111827", fontWeight: 600 },
};
