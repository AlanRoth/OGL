import FetchURL from "../components/FetchURL";
import Table from "../components/Table";

function Customers() {
    const endpoint = 'http://localhost:8080/customer';
    const customers = FetchURL(endpoint);
    const keys = ["id", "name"];

    return (
        <>
            <div className="table-container">
                <Table items={customers} keys={keys} />
            </div>
        </>
    )
}

export default Customers;