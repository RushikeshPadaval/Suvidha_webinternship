import React from 'react'
import {assets} from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const {openSignIn} = useClerk()
  const {user} = useUser()


  return (
    <div  className='shadow py-4' >
        <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center  ' >
            <img src={assets.logo} alt='' />
            {
              user? 
              <div>
              </div>:
            <div className='flex gap-4 max-sm:text-x5' >
                <button className='text-gray-600' >Recruiter Login</button>
                <button  onClick={e =>openSignIn() } className='bg-pink-600 text-white px-6 sm:px-9 py-2 rounded-full' >Login</button>
            </div>

                 
            }
        </div>
    </div>
  )
}

export default Navbar