import React from 'react'
import Product from '../components/Product';

const Products = () => {
    const products = [
        { id: 1, name: "Shoes", price: 100 },
        { id: 2, name: "Shirt", price: 50 },
        { id: 3, name: "Watch", price: 200 },
        { id: 4, name: "Bag", price: 500 },
        { id: 5, name: "Pen", price: 20 },
    ];

    return (
        <div className='flex flex-col gap-5'>

            <h2 className='font-bold text-xl'>Products</h2>
            <div className='flex flex-col gap-3'>
                {
                    products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>



        </div>
    )
}

export default Products