import './assets/css/App.css';
import ProductTable from "./components/ProductTable";
import FetchURL from "./components/FetchURL";
import ProductForm from "./components/ProductForm";

function App() {
    const endpoint = 'http://localhost:8080/product';
    const products = FetchURL(endpoint);
    return (
        <>
            <div className="navbar">
                <ul className="navitems">
                    <li className="navitem"><a className="active">Products</a></li>
                    <li className="navitem"><a>Customers</a></li>
                </ul>
            </div>
            <div className="app">
                <div className="widget-grid">
                    <div className="widget two-wide">
                        <h2 className="widgetName">Product List</h2>
                        <ProductTable products={products} />
                    </div>
                    <div className="widget two-wide">
                        <h2 className="widgetName">New Product</h2>
                        <ProductForm endpoint={endpoint} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
