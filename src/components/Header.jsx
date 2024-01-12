import Aos from 'aos';
import React, { useEffect, useState } from 'react'

export default function Header() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const [myIcon, setMyIcon] = useState(false);

    // for aos
    useEffect(() => {
        Aos.init({
            duration: 1500,
        })
    }, [])

    return (
        <>
            <div className={`px-3  sm:!px-10 sticky z-50 !top-[0px] h-[60px] py-0 w-100 flex justify-between items-center ${!scroll ? "bg-[#fff]" : "beauti-header-anim bg-[#191919df] !top-[0px]"}`}>
                <div>
                    <img src="/images/beauti-logo-regular.png" className={`${!scroll ? "" : "logo-img"}`} alt="" />
                </div>
                <div className={`gap-4 d-none d-lg-flex d-xl-flex d-xxl-flex ${!scroll ? "text-black" : "text-white"}`}>
                    <a href='#' className='scale-Eff'>SHOP ALL</a>
                    <a href='#' className='scale-Eff'>MAKEUP</a>
                    <a href='#' className='scale-Eff'>SKINCARE</a>
                    <a href='#' className='scale-Eff'>HAIRCARE</a>
                    <a href='#' className='scale-Eff'>ABOUT</a>
                    <a href='#' className='scale-Eff'>CONTACT</a>
                </div>
                <div className={`flex gap-3 items-center ${!scroll ? "text-black" : "text-white"}`}>
                    <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-user  cursor-pointer fs-4  hover:text-[#f78da7] duration-200"></i>
                    </button>
                    <i class="fa-solid fa-cart-shopping cursor-pointer fs-4 hover:text-[#f78da7] duration-200"></i>
                    <button class="d-block d-lg-none d-xl-none d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="fa-solid fa-bars fs-4 scale-Eff"></i>
                    </button>
                </div>
            </div>

            {/* offcanvas for responsive header */}
            <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <img src="/images/beauti-logo-regular.png" alt="" />
                    <button type="button" class="" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark fs-3"></i></button>
                </div>
                <div class="offcanvas-body p-0">
                    <div className="card !bg-[#f9f9f9] card-body px-0 py-0 border-0 rounded-0">
                        <a href='#' className='hover:text-[#f78da7] my-3 mx-3 '>SHOP ALL</a>
                        <hr />
                        <a href='#' className='hover:text-[#f78da7] my-3 mx-3 '>MAKEUP</a>
                        <hr />
                        <a href='#' className='hover:text-[#f78da7] my-3 mx-3 '>SKINCARE</a>
                        <hr />
                        <a href='#' className='hover:text-[#f78da7] my-3 mx-3 '>HAIRCARE</a>
                        <hr />
                        <a href='#' className='hover:text-[#f78da7] my-3 mx-3 '>ABOUT</a>
                        <hr />
                        <a href='#' className='hover:text-[#f78da7] my-3 mx-3 '>CONTACT</a>
                    </div>
                    <hr />
                </div>
            </div>

            {/* modal for user click */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header py-1">
                            <h1 class="modal-title fs-3 text-[#]" id="exampleModalLabel">Login</h1>
                            <button type="button" class="position-absolute top-[-9px] right-[-6px]" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-circle-xmark fs-2 text-[#f78da7]"></i></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <label htmlFor="name" className='font-semibold'>Name :</label>
                                <input type="text" className='form-control mt-1' placeholder='Enter Your Name...' />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="email" className='font-semibold'>Email :</label>
                                <input type="email" name="email" className='form-control mt-1' placeholder='Enter Your email...' />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="px-3 py-1 border-1 border-[#f78da7] rounded-2 hover:bg-[#f78da7] hover:text-white duration-200">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
