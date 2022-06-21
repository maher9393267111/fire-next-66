import React from 'react';
import { useState, useEffect } from 'react';
import { globaluse } from '../context/global';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Navbar = () => {

    const { signInWithGoogle,currentUser,userinfo,logout } = globaluse()

    return (
       <div>
        <div>

{/* -flex----- */}


<div className=' flex h-[82px] p-4 shadow-xl   justify-between  ml-6 mr-6 '>

<div className=' flex gap-4 ml-6'>
    <img
    
    className=' w-16 h-16'
    src="https://cdn4.iconfinder.com/data/icons/office-and-business-conceptual-flat/169/8-256.png" alt="" />


<div
className='relative top-4 text-[27px] font-semibold'
><p>Travel</p></div>

    </div>


<div>
    <h1
    
    className='translate-y-[7px] text-[21px]   mr-6 font-semibold'
    >
    {currentUser?.email ? 
(<div >
  <Stack spacing={2} direction="row">
      <Button
      onClick={logout}
      className=' mt-2 font-bold' variant="success">Logout</Button>
     <div><img className=' w-12 h-12 rounded-full' src={userinfo?.image} alt="" /></div>
    </Stack>


</div>)
:
(<div>

<Button
      onClick={signInWithGoogle}
      className=' mt-2 font-bold' variant="success">Login</Button>


</div>)    

}

   
    
    </h1>
</div>



</div>



        </div>
       </div>
    );
}

export default Navbar;
