import React from 'react'
import Slider from 'react-slick'

export default function BeautiProduct() {

    const beautySlider = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 3,
                    infinite: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: false
                }
            }
        ]
    }

    // map for productes 
    const beautyPro = [
        { id: 1, img: "/images/beauty-product-1.jpg", title: "Sun Cream", price: 500 },
        { id: 2, img: "/images/beauty-product-2.jpg", title: "Moisturiser Cream", price: 700 },
        { id: 3, img: "/images/beauty-product-3.jpg", title: "Anti-Ageing Cream", price: 400 },
        { id: 4, img: "/images/beauty-product-1.jpg", title: "Kumkumadi Cream", price: 699 },
    ]



    return (
        <>
            <div className='px-4'>
                <div className='beauti-hero-bg'>
                    <div className="beauty-fillter">
                        <div className="beauty-hero-anim flex justify-center text-center h-[100%] lg:items-start xl:items-start xxl:items-start items-center  flex-col lg:!w-[90%] xl:!w-[90%] xxl:!w-[90%] w-100 text-white mx-auto">
                            <p className='font-bold text-[#dedede]'>NEW IN TOWN</p>
                            <p className='display-3'>The New Beauty Collection</p>
                            <p className='fs-3 mt-3'>This new Collection brings with it the most exciting products </p>
                            <button className='bg-white text-lg text-black mt-4 px-3 py-2 hover:!bg-[#f78da7] hover:!text-white'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 px-3'>
                <Slider {...beautySlider}>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                    <div className='px-2 outline-none'>
                        <img src="/images/beauty-logo_1.png" className='border-black-50 border' alt="" />
                    </div>
                </Slider>
            </div>
            <div className='text-center mt-20'>
                <p className='font-light'>POPULAR PRODUCTS</p>
                <p className='display-3'>Trending Now</p>
            </div>
            <div className='flex wrapper justify-center gap-5 px-4 my-3 w-100'>
                {beautyPro.map((elem) => (
                    <div key={elem} class="card rounded-0" data-aos="fade-up">
                        <img src={elem.img} class="card-img-top rounded-0 card-images" alt="..." />
                        <div class="card-body">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <div className='flex'>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <h5 class="card-title my-2 font-semibold">{elem.title}</h5>
                                    <p class="card-text">₹{elem.price}</p>
                                </div>
                            </div>
                            <button className='w-100 mt-2 border-1 border-[#f78da7] text-black px-2 py-2 text-sm hover:!bg-[#f78da7] hover:!text-white'>SHOP NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='px-4'>
                <div className='my-[60px] beauty-bg2 w-100' data-aos="fade">
                    <div className='beauty-fillter h-100 w-100'>
                        <div className='mx-auto h-100 px-3 d-flex lg:!px-24 xl:!px-24  text-white align-items-center justify-content-center justify-content-lg-start justify-content-xl-start text-center text-lg-start text-xl-start'>
                            <div>
                                <p className='text-[#e0e0e0f2]'>NEW COLLECTION</p>
                                <p className='display-3 my-4'>The beauty collection </p>
                                <p className=''>Aliquam vulputate, nunc vitae suscipit aliquet, libero arcu hendrerit sapien.</p>
                                <button className='bg-white text-lg text-black mt-5 px-3 py-2 hover:!bg-[#f78da7] hover:!text-white'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-100 px-3 mt-5 m-0 gap-5 row row-cols-lg-4 justify-center items-center row-cols-md-2 row-cols-1'>
                <div className='col w-fit my-3 text-center'>
                    <p className='font-semibold'>WHY CHOOSE US</p>
                    <div className='w-[150px] h-[1px] bg-[#f78da7] mt-2'></div>
                </div>
                <div className='col my-3 p-0 text-center'>
                    <i class="fa-solid fa-truck-fast display-1 text-[#f78da7]"></i>
                    <p className='font-semibold text-xl'>Fast Delivery</p>
                    <p className='text-[14px]'>Experience lightning-fast delivery at your fingertips! Shop with us for an express journey from cart to doorstep.</p>
                </div>
                <div className='col my-3 p-0 text-center'>
                    <i class="fa-solid fa-dolly display-1 text-[#f78da7]"></i>
                    <p className='font-semibold text-xl'>Free Shipping</p>
                    <p className='text-[14px]'>Unlock the joy of free shipping! Shop with us and enjoy the ultimate shopping experience without the extra cost</p>
                </div>
                <div className='col my-3 p-0 text-center'>
                    <i class="fa-solid fa-truck-fast display-1 text-[#f78da7]"></i>
                    <p className='font-semibold text-xl'>Easy Return</p>
                    <p className='text-[14px]'>Shop stress-free with our hassle-free return policy! We understand that sometimes things don't go as planned, and that's why we've made returns easy as 1-2-3</p>
                </div>
            </div>
            <div className='w-100'>
                <div className='w-[150px] mx-auto h-[1px] my-[80px] bg-[#f78da7] mt-2'></div>
            </div>
            <div className='px-4 w-100 mb-5 wrapper flex justify-center gap-3'>
                <div className='beauty-bg3 w-100' data-aos="zoom-in">
                    <div className='beauty-fillter px-4 py-3 text-white flex justify-start items-center'>
                        <div>
                            <p>NEW COLLECTIONS</p>
                            <p className='fs-1 my-3'>Awesome Makeup Kit Gift Sets</p>
                            <p className='fs-4'>Find Your Unique Style</p>
                            <button className='bg-white text-black mt-3 px-3 py-2 hover:!bg-[#f78da7] hover:!text-white'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='beauty-bg4 w-100' data-aos="zoom-in">
                    <div className='beauty-fillter px-4 py-3 text-white flex justify-start items-center'>
                        <div>
                            <p>NEW COLLECTIONS</p>
                            <p className='fs-1 my-3'>Awesome Makeup Kit Gift Sets</p>
                            <p className='fs-4'>Find Your Unique Style</p>
                            <button className='bg-white text-black mt-3 px-3 py-2 hover:!bg-[#f78da7] hover:!text-white'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// <div key={elem} className='mx-2 mb-3'>
//     <div className='relative'>
//         <div className='absolute top-3 left-3'>
//             <div className='px-3 py-1 rounded-5 bg-white' title='for sale'>Sale</div>
//         </div>
//         <img src={elem.img} className='w-100 h-auto' alt="" />
//     </div>
//     <div className='flex mt-2 '>
//         <i class="fa-regular fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//     </div>
//     <div>
//         <p className='fs-4'>{elem.title}</p>
//         <p className='fs-5'>₹{elem.price}</p>
//     </div>
//     <div className='mt-2'>
//         <button className='border-1 border-[#f78da7] text-black px-2 py-2 text-sm hover:!bg-[#f78da7] hover:!text-white'>SHOP NOW</button>
//     </div>
// </div>