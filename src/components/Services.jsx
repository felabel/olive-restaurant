import React from 'react'
import burger from '../images/burger.jpg'

const Services = () => {
    return (
        <div className="  w-full  h-auto">
            <div className="img-bg bg-peaches  overflow-hidden bg-no-repeat bg-cover w-full h-full">
                <div className="bg-light-bg  h-full ">
                    <div className=" w-5/6 mx-auto py-10 md:py-14 lg:py-16 xl:py-16 text-center tracking-wider text-gray-300 leading-normal">
                        <h1 className=' text-5xl font-bold  pb-4'>Best Services</h1>
                        <p className="text-lg">Services we offer excellently</p>
                        <div className="content wrapper mx-auto grid w-9/12 sm:w-full lg:w-full xl:w-full md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 my-20 gap-12">
                            {/* birthday */}
                            <div className=" tracking-wide h-auto ">
                                <div className=' w-20 h-20 mx-auto  items-center'>
                                    <img src={burger} alt='birthday parties' className='my-auto'/>
                                </div>
                                <p className="title text-xl pb-2">BirthDay Party</p>
                                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis fugiat laborum commodi aspernatur ad voluptates!</p>
                                <div className="bg-gray-100 h-0.5 w-14 mx-auto mt-5"></div>
                            </div>

                            {/* events party */}
                            <div className=" tracking-wide h-auto">
                                <div className=' w-20 h-20 mx-auto  items-center'>
                                    <img src={burger} alt='birthday parties' className='my-auto'/>
                                </div>
                                <p className="title text-xl pb-2">BirthDay Party</p>
                                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis fugiat laborum commodi aspernatur ad voluptates!</p>
                                <div className="bg-gray-100 h-0.5 w-14 mx-auto mt-5"></div>
                            </div>

                            {/* private reservations */}
                            <div className=" tracking-wide h-auto">
                                <div className=' w-20 h-20 mx-auto  items-center'>
                                    <img src={burger} alt='birthday parties' className='my-auto'/>
                                </div>
                                <p className="title text-xl pb-2">Private Reservations</p>
                                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis fugiat laborum commodi aspernatur ad voluptates!</p>
                                <div className="bg-gray-100 h-0.5 w-14 mx-auto mt-5"></div>
                            </div>

                            {/* surprise packages */}
                            <div className=" tracking-wide h-auto">
                                <div className=' w-20 h-20 mx-auto  items-center'>
                                    <img src={burger} alt='birthday parties' className='my-auto'/>
                                </div>
                                <p className="title text-xl pb-2">Surprise Parties</p>
                                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis fugiat laborum commodi aspernatur ad voluptates!</p>
                                <div className="bg-gray-100 h-0.5 w-14 mx-auto mt-5"></div>
                            </div>

                    </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Services
