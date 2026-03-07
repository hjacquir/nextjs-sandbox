export default function Product({name, price, stocked, category}) {
    if (!stocked) {
        name = <span style={{color: "red"}}>{name}</span>
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{category}</td>
            </tr>
        </>
    );
}
