import '../assets/css/Table.css';

function Table({items, keys}) {
    if(!items || !keys) {
        return;
    }

    return (
        <table>
            <thead>
            <tr>
                {keys.map(key => <th>{key.toUpperCase()}</th>)}
            </tr>
            </thead>
            <tbody>{items.map((item) => <ItemRow item={item} />)}</tbody>
        </table>
    )
}

function ItemRow({item}) {
    return (
        <tr>
            {Object.keys(item).map((key) => <td>{item[key]}</td>)}
        </tr>
    )
}

export default Table;