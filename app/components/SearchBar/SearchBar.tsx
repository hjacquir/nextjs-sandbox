export default function SearchBar({onFilterTextChange, onStockOnlyChange}) {
    return (
        <>
            <form>
                <input onChange={(e) => onFilterTextChange(e.target.value)} type="text" placeholder="Rechercher ..."/>
                <br/>
                <div>
                    <input onChange={(e) => onStockOnlyChange(e.target.checked)} type="checkbox"/>{' '}Uniquement les produits en stock.
                </div>
            </form>
        </>
    );
}
