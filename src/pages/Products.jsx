import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        //fetch products from the file db.json
        try {
            const fetchProducts = async () => {
                const response = await fetch('http://localhost:3001/products')
                const data = await response.json()
                console.log(data)
                setProducts(data)
            }
            fetchProducts()
        }
        catch (err) {
            console.log(err)
        }

    }, [])

    return (
        <>
            <Navbar />
            <div className="grid grid-cols-5 gap-4 my-7 mx-24">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    )
}

export default Products