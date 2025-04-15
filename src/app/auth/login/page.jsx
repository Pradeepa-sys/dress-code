import React from 'react'
import Image from 'next/image'
import Signup from "../../../../public/assets/images/signup/signup.svg"

function page() {
  return (
    <div>
          <div className='flex '>
          <div>
            <Image src={Signup}/>
          </div>
          <div>
             <h1>Create an account</h1>
             <p>Enter your details below </p>
             <form action="">
              <input type="text" placeholder='Name' className='border-b focus:border-[#]' />
             </form>
          </div>
          </div>
         
        </div>
  )
}

export default page