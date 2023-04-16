import FetchURL from "../components/FetchURL";
import Table from "../components/Table";
import CustomerForm from "../components/CustomerForm";
import {useEffect} from "react";

function Customers() {
    const endpoint = 'http://localhost:8080/customer';
    const customers = FetchURL(endpoint);
    const keys = ["id", "name", "address"];

    customers.map((customer) => {
        const addressToString = convertAddressToString(customer['address']);
        customer['address'] = addressToString;
    })

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

function convertAddressToString(address) {
    if(!address || typeof address === 'string') {
        return address;
    }

    return address.street + ",\n" + address.city + ",\n" + address.county + ",\n" + address.postcode;
}

export default Customers;