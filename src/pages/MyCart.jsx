import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MyCartItem from '../components/MyCartItem'
import PriceDetails from '../components/PriceDetails'
import { useSelector } from 'react-redux'


const MyCart = () => {

    const cart = useSelector((state) => state.cart);
    console.log("cart", cart);

    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + parseInt(curr.amount), 0));
    }, [cart]);

    const handleOrderUpdate = async () => {
        const res = await fetch("http://localhost:3001/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: cart,
                amount: totalAmount,
            }),
        });
        const data = await res.json();
        console.log("data", data);
        //clear the cart
        window.location.href = "/products";
    }

    return (
        <>
            <Navbar />
            <div className="flex gap-3 items-center my-4 mx-36">
                <section className="bg-white p-5 w-[650px]">
                    <h2 className="text-lg font-semibold">My Cart</h2>
                    {
                        cart.map((item) => {
                            return <MyCartItem key={item.id} item={item} />
                        })
                    }
                </section>
                <PriceDetails totalAmount={totalAmount} />
            </div>
            <button
                onClick={handleOrderUpdate}
                className="bg-blue-500 text-white text-sm px-2.5 py-2 mx-36 rounded-sm">PLACE ORDER</button>
        </>
    )
}

export default MyCart