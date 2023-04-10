import './assets/css/App.css';
import ProductTable from "./components/ProductTable";
import FetchURL from "./components/FetchURL";
import ProductForm from "./components/ProductForm";

function App() {
    const endpoint = 'http://localhost:8080/product';
    const products = FetchURL(endpoint);
    return (
        <>
            <div className="header">
                <h1>Dev-Test</h1>
            </div>
            <div className="app">
                <ProductTable products={products} />
                <ProductForm endpoint={endpoint}/>
            </div>
        </>
    )
}

export default App;
