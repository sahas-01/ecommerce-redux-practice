import React from 'react'
import Navbar from '../components/Navbar'
import MyCartItem from '../components/MyCartItem'
import PriceDetails from '../components/PriceDetails'

const MyCart = () => {
    return (
        <>
            <Navbar />
            <div className="flex gap-3 items-center my-4 mx-36">
                <section className="bg-white p-5 w-[650px]">
                    <h2 className="text-lg font-semibold">My Cart</h2>
                    <MyCartItem />
                    <MyCartItem />
                </section>
                <PriceDetails />
            </div>
            <button className="bg-blue-500 text-white text-sm px-2.5 py-2 mx-36 rounded-sm">PLACE ORDER</button>
        </>
    )
}

export default MyCart