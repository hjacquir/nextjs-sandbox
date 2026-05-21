'use client'
import Product from '../../components/Products/Product';
import SearchBar from '../../components/SearchBar/SearchBar'
import {useEffect, useState} from "react";
import './products.css'
import {ListOffer} from '../actions'
// import {ProductList} from '@/app/components/Products/ProductList'

export default function Products() {
    const products = [
        { category: 'Fruits', price: '$1', stocked: true, name: 'Pomme' },
        { category: 'Fruits', price: '$1', stocked: true, name: 'Fruit du dragon' },
        { category: 'Fruits', price: '$2', stocked: false, name: 'Fruit de la passion' },
        { category: 'Légumes', price: '$2', stocked: true, name: 'Épinard' },
        { category: 'Légumes', price: '$4', stocked: false, name: 'Citrouille' },
        { category: 'Légumes', price: '$1', stocked: true, name: 'Petits pois' },
    ];

    const [filterText, setFilterText] = useState('')
    const [stockOnly, setStockOnly] = useState(false)

    return (
        <>
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Liste
                </h1>
                    <SearchBar onFilterTextChange={setFilterText} onStockOnlyChange={setStockOnly} />
                    <List products={products} filterText={filterText} stockOnly={stockOnly} />
            </div>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            </div>
        </>
    );
}

function List({products, filterText, stockOnly}) {
    let rows = []

    products.forEach(
        (product) => {
            if (stockOnly && !product.stocked) {
                return
            }

            if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return
            }

            rows.push(
                <Product key={product.name} name={product.name} price={product.price} stocked={product.stocked}
                         category={product.category.name}/>
            )
        }
    );

    return (
        <>
            <table>
                <thead>
                <tr>
                    <td><strong>NOM</strong></td>
                    <td><strong>PRIX</strong></td>
                    <td><strong>CATÉGORIE</strong></td>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </>
    );
}
