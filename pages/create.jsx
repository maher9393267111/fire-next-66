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

import { useAuth } from "../context/global";

const CreateProducts = () => {
  const [info, setinfo] = useState("");
  const [name, setname] = useState("");
  const [villaprice, setvillaprice] = useState("");
  const [productTitle, setProductTitle] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi."
  );

  const [productimagesurl, setproductimagesurl] = useState("");
  const [childtcategory, setchildcategory] = useState([]);
  const [selectedcategory, setselectedcategory] = useState("");
  const [fileurl, setfileurl] = useState("");
  const [images, setImages] = useState([]);
  const [imageColor, setImagecolor] = useState("");
  const [productsize, setProductsize] = useState([]);
  const [success, setSuccess] = useState(false);


 

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
    <div className="  w-[420px]  h-auto mx-auto mt-12  font-bold">
      <form id="product-form" className="form-control" onSubmit={handleSubmit}>
        <div>
          <h1>name</h1>
          <input onChange={(e) => setname(e.target.value)} type="text" />
        </div>

        <div>
          <h1>price</h1>
          <input
            onChange={(e) => setvillaprice(e.target.value)}
            type="number"
          />
        </div>

       

        <input onChange={handleimages} type="file" multiple={true} />

        <div>
          <h1>image color {imageColor}</h1>
        </div>
      

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
