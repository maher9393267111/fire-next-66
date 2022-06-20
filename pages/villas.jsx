import React from 'react';
import { villasdata } from '../utils/data';



import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const VillaWithNoSSR  = dynamic(() => import('../components/singlevilla'), {
    ssr: false
  });



const Villas = () => {






    return (
        <div>
            <h1>Villas</h1>



            <div className="villas-container">

         

                {villasdata.map((villa, index) => {
                    return (
                        <div key={index} className="villa">

                            <VillaWithNoSSR villa={villa} />
                        </div>
                    )
                })}

            </div>



        </div>
    );
}

export default Villas;
