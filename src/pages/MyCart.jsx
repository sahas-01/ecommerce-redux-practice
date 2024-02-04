import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MyCartItem from '../components/MyCartItem'
import PriceDetails from '../components/PriceDetails'
import { useSelector } from 'react-redux'
import { ReactComponent as GreenTick } from '../assets/green-tick.svg'



const MyCart = () => {

    const cart = useSelector((state) => state.cart);
    console.log("cart", cart);
    const [successModal, setSuccessModal] = useState(false);

    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + parseInt(curr.amount), 0));
    }, [cart]);

    const handleOrderUpdate = async () => {
        if (cart.length === 0) {
            alert("Your cart is empty");
            return;
        }
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
        setSuccessModal(true);
        //clear the cart
        setTimeout(() => {
            window.location.href = "/products";
        }, 3000);
    }

    return (
        <>
            <Navbar />
            {
                cart.length === 0 && (
                    <p className="text-lg font-semibold mx-36 mt-5">Your cart is empty</p>
                )
            }
            {
                cart.length > 0 && (
                    <div className="flex gap-3 items-center my-4 mx-36">
                        <section className="bg-white p-5 w-[650px]">
                            <h2 className="text-lg font-semibold">My Cart</h2>
                            {
                                cart?.map((item) => {
                                    return <MyCartItem key={item.id} item={item} />
                                })
                            }
                        </section>
                        <PriceDetails totalAmount={totalAmount} />
                    </div>
                )
            }
            {
                successModal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white flex justify-center flex-col items-center p-10 rounded-md">
                            <GreenTick className='w-52 h-52' />
                            <h2 className="text-4xl font-semibold">Order Placed Successfully</h2>
                            <p className="text-lg">
                                It will be delivered in 5 days
                            </p>
                        </div>
                    </div>
                )
            }
            <button
                onClick={handleOrderUpdate}
                className="bg-blue-500 text-white text-sm px-2.5 py-2 mx-36 rounded-sm">PLACE ORDER</button>
        </>
    )
}

export default MyCart