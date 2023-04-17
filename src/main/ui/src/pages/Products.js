import FetchURL from "../components/FetchURL";
import ProductForm from "../components/ProductForm";
import Table from "../components/Table";

function Products() {
    const endpoint = 'http://localhost:8080/product';
    const products = FetchURL(endpoint);
    const keys = ["id", "sku", "price", "description"];

    return (
        <>
            <div className="table-container">
                <Table items={products} keys={keys} />
            </div>
            <div className="form-container">
                <ProductForm endpoint={endpoint} />
            </div>
        </>
    )
}

export default Products;

