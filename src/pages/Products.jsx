import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import PriceDetails from '../components/PriceDetails'

const Products = () => {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-5 gap-4 my-7 mx-24">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}

export default Products