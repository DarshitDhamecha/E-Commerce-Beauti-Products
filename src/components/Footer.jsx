import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='w-100 px-4 py-4 mt-5'>
                <div className='w-100 bg-[#f6edf0]'>
                    <div className='w-100 wrapper gap-3 flex justify-between p-3 py-5'>
                        <div className='w-100'>
                            <p className='fs-3'>Subscribe to our newsletter</p>
                        </div>
                        <div className='w-100 flex flex-wrap gap-3'>
                            <input type="text" className='form-control flex-grow-1 w-75 rounded-none' placeholder='Enter Your Email...' />
                            <button className='px-3 py-2 text-lg bg-[#000000] flex-grow-1 text-white hover:bg-[#fff] hover:!text-black'>Subscribe</button>
                        </div>
                    </div>
                    <hr />
                    <div className='py-5 px-3 flex flex-wrap justify-evenly gap-5 items-center'>
                        <div className=''>
                            <img src="/images/beauti-logo-regular.png" alt="" />
                        </div>
                        <div className='text-center'>
                            <p>Shop All</p>
                            <p>Makeup</p>
                            <p>Skin Care</p>
                            <p>Hair Care</p>
                            <p>About</p>
                            <p>Contect</p>
                        </div>
                        <div className='text-center'>
                            <p>Refund Policy</p>
                            <p>Terms & Conditions</p>
                            <p>FAQ</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className='flex gap-3 justify-center fs-4'>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-solid fa-envelope"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
