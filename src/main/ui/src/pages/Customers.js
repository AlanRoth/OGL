import FetchURL from "../components/FetchURL";
import Table from "../components/Table";
import CustomerForm from "../components/CustomerForm";

function Customers() {
    const endpoint = 'http://localhost:8080/customer';
    const customers = FetchURL(endpoint);
    const keys = ["id", "name", "address"];

    console.log(customers);

    return (
        <>
            <div className="table-container">
                <Table items={customers} keys={keys} />
            </div>
            <div className="table-container">
                <CustomerForm endpoint={endpoint} />
            </div>
        </>
    )
}

export default Customers;