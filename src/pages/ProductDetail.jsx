import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { add } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
    const dispatch = useDispatch();

    //get the id from the url
    const [product, setProduct] = useState({})
    const url = window.location.href
    const id = url.split('/')[4]
    console.log(id)

    //find the product with this from the db.json
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:3001/products/${id}`)
            const data = await response.json()
            console.log(data)
            setProduct(data)
        }
        fetchProduct()
    }
        , [id])

    const handleBuy = async () => {
        const res = await fetch(`http://localhost:3001/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [product],
                amount: parseInt(product.amount),
            }),
        });
        const data = await res.json();
        console.log("data", data);
        //clear the cart
        window.location.href = "/products";
    }

    const handleAddCart = () => {
        console.log("product", product);
        dispatch(add(product));
    };


    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center m-36'>
                <div className='w-1/2'>
                    <img
                        src={product?.image || "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg"}
                        alt='productimg'
                        className='h-96 w-96 object-cover object-center object-fit'
                    />
                </div>
                <div className="border-r border-gray-300 h-96 mr-8"></div>
                <div className='w-1/2'>
                    <h1 className='text-2xl font-bold my-5'>{
                        product?.title || "T-shirt for formal"
                    }</h1>
                    <p className='text-sm my-5'>
                        {
                            product?.description || "This is a t-shirt for formal wear"
                        }
                    </p>
                    <p className='text-lg font-bold my-5'>₹ {product?.amount || 200}</p>
                    <div className='flex gap-x-10 my-3'>
                        <button
                            onClick={handleBuy}
                            className='bg-transparent border-black border-2 py-4 px-10'>
                            Buy Now
                        </button>
                        <button
                            onClick={handleAddCart}
                            className='bg-black text-white py-4 px-10'>
                            Add to Basket
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail