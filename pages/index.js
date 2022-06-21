import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Script from "next/script";




import {globaluse} from "../context/global";
export default function Home() {






const {villas} = globaluse();


  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
         // crossorigin=""
        />

       
      </Head>

      <>

<Script
            src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
            integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
           // crossorigin=""
          ></Script>
</>


<div>

<div>

</div>



{/* ---all villas show- */}

<div>

<div>

{villas.map((villa)=>{

return (
<div
key={villa.id}
>

</div>


)})}


</div>




</div>







</div>


      
    </div>
  );
}
