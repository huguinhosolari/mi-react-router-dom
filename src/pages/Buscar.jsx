import { useSearchParams } from "react-router-dom";

const products = [
    "3 habitaciones", "2 habitaciones con vista", "Penthouse",
  "Parqueos dobles", "Cerca de parques", "Pet friendly"
];


export default function Buscar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const q=searchParams.get("q") ?? "";

    const results = products.filter(product => product.toLowerCase().includes(q.toLowerCase()));

    return (
        <section>
            <h1>Buscar</h1>
                <input
                    placeholder="Buscar características"
                    value={q}
                    onChange={(e) => {
                        const v = e.target.value;
                        if (v) {
                            setSearchParams({ q: v });
                        } else {
                            setSearchParams({});
                        }
                    }}
                    />
                    <ul style={{marginTop: 12}}>
                        {results.map((product, index) => <li key={index}>{product}</li>)}
                    </ul>
                    <p style={{color: "#667", marginTop: 8}}>La búsqueda vive en la url como <code>?q=...</code>
                    </p>
        </section>
    );

}