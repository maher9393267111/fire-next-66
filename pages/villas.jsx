import React from 'react';
import { villasdata } from '../utils/data';
import {  globaluse} from '../context/global';


import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const VillaWithNoSSR  = dynamic(() => import('../components/singlevilla'), {
    ssr: false
  });



const Villas = () => {

const {name} =  globaluse()




    return (
        <div>
            <h1>Villas {name}</h1>



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
