import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { db } from "../firebase";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import {
  doc,
  collection,
  getDocs,
  limit,
  orderBy,
  where,
  query,
  collectionGroup,
  getDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const Villaid = () => {
  const router = useRouter();
  const Villaid = router.query.villaid;
  console.log("single villa id---->", Villaid);

  const [villa, setVilla] = useState({});
  const [Selectedimage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (Villaid) {
        console.log(" Villa id is changeddd--->⏩⏩⏩   :--------->", Villaid);
      fetchvilla();
    }
  }, [Villaid]);

  const fetchvilla = async () => {
    await getDoc(doc(db, "villas", Villaid)).then((docSnap) => {
      setVilla(docSnap.data());
      setSelectedImage(docSnap.data().images[0]);

      console.log("villa information issss- :--------->⏩", villa);
    });

    // const [villadata] = useDocumentData(doc(db, "villas", Villaid));
    // setVilla(villadata);



  };

  return (
    <div>
      <div>
        {" "}
        <h1>Villa information</h1>
      </div>

<div>
    
  <div>
        <div>
          <div className="  grid sm:grid-cols1  shadow-2xl  mt-12  lg:min-h-[400px] ml-6 mr-6  pb-12  lg:grid-cols-2">
            {/* -----image--- */}

            <div className="  lg:mt-12  sm:w-full">
              <img
                className="  ml-8 w-[494px]  h-[322px] object-cover"
                src={Selectedimage}
                alt=""
              />
            </div>

            {/* info and map--- */}

            <div className=" sm:ml-12 lg:ml-4 sm:mt-12 text-xl  sm:w-full mr-4">
              <div className="  ">
                <p>Name: {villa?.name}</p>

                <p> Location : Sapanca 2km from center</p>

                <p>Rooms number {villa?.roomsnumber}</p>

                <p>Price: {villa?.price}$</p>

                <p className=" w-[90%] text-left  mmy-4">
                  Descreption: s simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>

                <p>{villa?.gu}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>



    
    </div>
  );
};

export default Villaid;
