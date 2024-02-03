import React from 'react'

const PriceDetails = () => {
    return (
        <div className='bg-white py-3 px-2'>
            <h1 className='text-2xl font-bold my-2'>Price Details</h1>
            <div className='flex justify-between'>
                <p>Price</p>
                <p>2150</p>
            </div>
            <div className='flex justify-between'>
                <p>Discount Price</p>
                <p>100</p>
            </div>
            <div className='flex justify-between'>
                <p>Delivery Charge</p>
                <p>50</p>
            </div>
            <hr />
            <div className='flex my-5 justify-between'>
                <p>Total</p>
                <p>2200</p>
            </div>
        </div>
    )
}

export default PriceDetails