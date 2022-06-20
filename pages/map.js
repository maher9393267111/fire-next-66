import React from 'react';
import dynamic from 'next/dynamic';
import { useState,useEffect } from 'react';
//import MapComponent from '../components/mapcomp';

const MapWithNoSSR = dynamic(() => import('../components/mapcomp'), {
    ssr: false
  });
  

const Map = () => {


 

    return (
        <div>
            <div>
                <div>
                    <h1>map page</h1>
                </div>

{/* {isSSR ? <div>Loading...</div> : <MapComponent />} */}
                <MapWithNoSSR />

            </div>
        </div>
    );
}

export default Map;
