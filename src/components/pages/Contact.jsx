import React from 'react'
import Layout from '../Layout'

const Contact = () => {
    return (
        <Layout>
           <div className="wrapper w-full h-auto bg-gray-200">
               <div className=" w-9/12 shadow-md rounded-md h-full pt-20 mx-auto flex text-xl tracking-wide">
                   <div className=" h-full w-9/12 p-6"> 
                       <h className="text-4xl text-black font-bold my-4">GET IN TOUCH</h>
                       <div>
                            <form className="">
                                <label htmlFor="">
                                    <p className="my-4">Full Name <span className="text-olive-orange">*</span></p> 
                                </label>
                                <input type="text" placeholder="Enter your Name" className="pl-8 w-4/5 h-12 border-none outlinr-none"/>
                                <label htmlFor="">
                                    <p className="my-4">Message <span className="text-olive-orange">*</span></p> 
                                </label>
                                <textarea  placeholder="message" className="pl-8 w-3/4 h-48"/> <br />

                                <button type='submit' className="px-16 py-3 bg-olive-orange my-8 rounded-full uppercase text-lg text-white tracking-wider">Submit</button>
                            </form>  
                        </div>
                   </div>
                   <div className="bg-olive-orange h-full p-6 w-1/4">hey</div>
                   
                   

               </div>
            
            </div> 
        </Layout>
        
    )
}

export default Contact
