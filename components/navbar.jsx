import React from 'react';

const Navbar = () => {
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
className=' relative top-4 text-[27px] font-semibold'
><p>Travel</p></div>

    </div>


<div>
    <h1
    
    className=' translate-y-[23px] text-[21px]   mr-6 font-semibold'
    >login</h1>
</div>



</div>



        </div>
       </div>
    );
}

export default Navbar;
