import React from "react";
import { useState, useRef, useEffect } from "react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadString,
  getStorage,
  uploadBytes,
} from "firebase/storage";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import { globaluse} from "../context/global";
import { set } from "date-fns";

const CreateProducts = () => {
  const [info, setinfo] = useState("");
  const [name, setname] = useState("");
  const [villaprice, setvillaprice] = useState(0);
  const [productTitle, setProductTitle] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi."
  );

  const [productimagesurl, setproductimagesurl] = useState("");

  const [fileurl, setfileurl] = useState("");
  const [images, setImages] = useState([]);
  const [imageColor, setImagecolor] = useState("");

  const [success, setSuccess] = useState(false);
  const [bathnumber, setBathnumber] = useState(0);
 ;
    const [bedsnumber, setBedsnumber] = useState(0);
    const [roomsnumber, setRoomsnumber] = useState(0);
    const [guestmaxnumber, setGuestmaxnumber] = useState(0);
const [villaspace, setVillaspace] = useState(0);



 

  // if  userinfo role is admin then only he can create product else redirect to home page

  const handleimages = async (e) => {
    console.log("imageColor is not empty");

    const file = e.target.files[0];
    console.log(file);
    // generate a random string
    const random =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const testRef = ref(storage, `villa/${random}`);

    await uploadBytes(testRef, file).then((snapshot) => {
      console.log("Uploaded image to storage success!");
    });

    // get image url from storage and set into state
    const down = await getDownloadURL(testRef);
    //setproductimage(down);

    setImages([...images, down]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const villa = {
      name: name,
      price: villaprice,
      images: images,
      villaprice: villaprice,
     space: villaspace,
        bedsnumber: bedsnumber,
        roomsnumber: roomsnumber,
        guestmaxnumber: guestmaxnumber,
        bathnumber: bathnumber,


    };

    console.log("villa------>", villa);

    await addDoc(collection(db, "villas"), villa)
      .then(() => {
        setSuccess(true);
        document.getElementById("product-form").reset();
        setImages([]);
      })
      .catch((error) => {
        setSuccess(false);
      });
    //  reset all the state
  };



  return (
    <div className="  w-[420px] pb-12  h-auto mx-auto mt-12  font-bold">
      <form id="product-form" className="form-control" onSubmit={handleSubmit}>
        <div className=" my-4">
       

          <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={(e) => setname(e.target.value)}
          defaultValue="villa name"
        />

          {/* <input onChange={(e) => setname(e.target.value)} type="text" /> */}
        </div>

        <div className=" my-4">
          
       
<TextField
          id="outlined-number"
          label="villaspace"
          type="number"
          onChange={(e) => setvillaprice(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
         
        </div>

       


        <div className=" my-4">
          

          
          <TextField
          id="outlined-number"
          label="villaspace"
          type="number"
          onChange={(e) => setVillaspace(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />


        </div>


        <div className="my-4">
          

          <TextField
          id="outlined-number"
          label="villasbathnumber"
          type="number"
          onChange={(e) => setBathnumber(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />


        
        </div>


        <div className=" my-4">
    

      
          <TextField
          id="outlined-number"
          label="villabedsnumber"
          type="number"
          onChange={(e) => setBedsnumber(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />


          
        </div>

        <div>
       

          <TextField
          id="outlined-number"
          label="villaroomsnumber"
          type="number"
          onChange={(e) => setRoomsnumber(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />


          
        </div>





        <div className="my-4">
          


          <TextField
          id="outlined-number"
          label="villaguestmaxnumber"
          type="number"
          onChange={(e) => setGuestmaxnumber(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        




        </div>






        <input onChange={handleimages} type="file" multiple={true} />

       

        {images.length}

        {/* <button

onClick={uploadImages}
>upoad images</button> */}

        <div>
          images
          <div className=" flex  gap-9">
            {images.map((image, index) => {
              return (
                <img 
                key={index}
                  className="w-12 h-12 rounded-full object-cover"
                  src={image}
                  alt=""
                />
              );
            })}
          </div>
        </div>

        <div>
          <button
            //  onClick={handleSubmit}
            type="submit"
            className="focus:outline-none mt-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
