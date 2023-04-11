import '../assets/css/ProductTable.css';

function ProductTable({products}) {
    const rows = [];

    products.forEach((product) => rows.push(<ProductRow product={product} key={product.id} />))

    return(
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>SKU</th>
                <th>PRICE</th>
                <th>DESCRIPTION</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function ProductRow({product}) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.sku}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
        </tr>
    )
}

export default ProductTable;