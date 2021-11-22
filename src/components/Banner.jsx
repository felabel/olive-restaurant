import React from 'react'
import { withRouter } from 'react-router-dom';

const Banner = ( {history} ) => {
    return (
        <section className="-mt-28 lg:-mt-20 xl:-mt-20 bg-opacity-1 ">
            <div className="rounded-md bg-peaches bg-black overflow-hidden bg-no-repeat bg-cover w-full  h-h-auto sm:h-screen md:h-1/2 lg:h-1/2 xl:h-screen">
                <div className="overlay w-full h-full bg-light-bg">
                    <div className="grid   md:grid-cols-2 lg:grid-cols-2 w-4/5  gap-8 h-1/2 sm:h-4/5 md:h-4/5 lg:h-4/5  xl:h-4/5 mx-auto pt-40">
                        <div className="text ">
                            <div className="content ">
                                
                                <h1 className="text-2xl sm:text-2xl md:text-2xl xl:text-2xl font-semibold tracking-wider text-olive-orange"><span className="text-gray-100">Welcome to </span>Olive food court</h1>
                                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl capitalize font-bold text-gray-200 py-4 tracking-wider">The authentic <br /> restaurant & cafe</h1>
                                <p className="text-xl md:text-base sm:text-base xl:text-base lg:text-base text-gray-300">Have a taste of all our continental cuisines, that we prepare best to serve you. We deliver right at your doorstep when you make an order. </p>
                                <p className="btn border border-olive-orange text-base px-12 my-10 rounded-none text-gray-200 font-normal" onClick={() => history.push('/shop')}>Order Now</p>
                            </div>
                        </div>
                        <div className=" pic relative hidden sm:hidden md:block lg:block xl:block">
                            <div className="md:h-1/2 lg:h-full my-auto h-full w-full absolute right-0 bg-burger overflow-hidden bg-no-repeat bg-cover">
                                

                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}


export default withRouter(Banner); 
