import React from 'react';
    import { villasdata } from '../utils/data';
    //import VillaCard from '../components/singlevilla';
  import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// const DynamicHeader = dynamic(() => import('../components/singlevilla'), {
//   suspense: true,
//   ssr:false
  
// },

// )
const Villas = () => {

    //  const isSSR = typeof window === `undefined`
    // console.log(isSSR)





    return (
        <div>
            <h1>Villas</h1>



            <div className="villas-container">


                {villasdata.map((villa, index) => {
                    return (
                        <div key={index} className="villa">
                            
                            {/* <Suspense fallback={`Loading...`}> */}
  {/* { !isSSR  &&   <DynamicHeader villa ={villa} />  }   */}
    {/* </Suspense> */}
                                </div>
                    )})}

                    </div>

                           

        </div>
    );
}

export default Villas;
