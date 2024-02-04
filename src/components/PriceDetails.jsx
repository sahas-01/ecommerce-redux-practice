import React from 'react'

const PriceDetails = ({ totalAmount }) => {
    return (
        <div className='bg-white py-3 px-4 w-80'>
            <h1 className='text-2xl font-semibold my-2 text-[#7c7c7c]'>Price Details</h1>
            <div className='flex py-2 justify-between'>
                <p>Price</p>
                <p>{totalAmount}</p>
            </div>
            <div className='flex py-2 justify-between'>
                <p>Discount Price</p>
                <p>100</p>
            </div>
            <div className='flex py-2 justify-between'>
                <p>Delivery Charge</p>
                <p>50</p>
            </div>
            <hr className='bg-[#7c7c7c] border-[#7c7c7c] h-0.5' />
            <div className='flex text-lg my-11 justify-between'>
                <p>Total</p>
                <p>{totalAmount-50}</p>
            </div>
        </div>
    )
}

export default PriceDetails