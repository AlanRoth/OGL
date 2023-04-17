import '../assets/css/Table.css';

function Table({items, keys}) {
    if(!items || !keys) {
        return;
    }

    return (
        <table>
            <thead>
            <tr>
                {keys.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)}
            </tr>
            </thead>
            <tbody>{items.map((item, index) => <ItemRow key={index} item={item} />)}</tbody>
        </table>
    )
}

function ItemRow({item}) {
    return (
        <tr>
            {Object.keys(item).map((key, index) => <td key={index}>{item[key]}</td>)}
        </tr>
    )
}

export default Table;