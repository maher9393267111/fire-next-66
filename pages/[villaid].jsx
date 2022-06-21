import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@mui/material/Button";
import {globaluse} from "../context/global";

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/villa/villamap"), {
  ssr: false,
});

const DateWithNoSSR = dynamic(() => import("../components/villa/dateModal"), {
    ssr: false,
  });

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
  const {disbledaysischange, setDisbledaysischange} = globaluse();

  const [villa, setVilla] = useState({});
  const [Selectedimage, setSelectedImage] = useState(0);
  const [allimages, setAllImages] = useState([]);
  const [geoData, setGeoData] = useState({ lat: null, lng: null });
const [villadiabledays, setVilladiabledays] = useState([]);

  useEffect(() => {
    if (Villaid) {
      console.log(" Villa id is changeddd--->⏩⏩⏩   :--------->", Villaid);
      fetchvilla();
    }
  }, [Villaid,disbledaysischange]);

  const fetchvilla = async () => {
    await getDoc(doc(db, "villas", Villaid)).then((docSnap) => {
      setVilla(docSnap.data());
      setSelectedImage(docSnap.data().images[0]);
      setAllImages(docSnap.data().images);
      setGeoData({
        lat: docSnap.data().coordinate.lat,
        lng: docSnap.data().coordinate.lng,
      });
        setVilladiabledays(docSnap.data().disabledDays);

      console.log("villa information issss- :--------->⏩", villa);
    });

    // const [villadata] = useDocumentData(doc(db, "villas", Villaid));
    // setVilla(villadata);
  };


// datec celandeer modal functions----

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

//-------------------




  return (
    <div className=" pb-20">
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
                  <p className="my-2">Name: {villa?.name}</p>

                  <p className=" my-2"> Location : Sapanca 2km from center</p>

                  <p>Rooms number {villa?.roomsnumber}</p>

                  <p className=" my-2">Price: {villa?.price}$</p>

                  <p className=" w-[90%] text-left  my-4">
                    Descreption: s simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley
                  </p>

                  <p className=" my-2">
                    {" "}
                    max Guest number : {villa?.guestmaxnumber}
                  </p>

                  <p className=" my-2"> beds number : {villa?.bedsnumber}</p>

                  <p className=" my-2"> bath number : {villa?.bathnumber}</p>
                </div>
              </div>

              <div>
                <div className=" my-6 mx-12">
                  <Button 
                  onClick={handleOpen}
                  
                  className=" bg-[#1565c0]" variant="contained">Make rezervasyon</Button>

<div>
    { open && 
    <DateWithNoSSR 
  
villadiabledays ={villadiabledays}  
villaid={Villaid}
    />
}
</div>


                </div>
              </div>
            </div>

            {/* ---photos- */}

            <div className=" mt-12">
              <div>
                {/* -headder- */}

                <div>
                  <h1 className=" mt-12  text-2xl ml-10 mb-12">
                    {" "}
                    Villa Photos
                  </h1>
                </div>

                <div>
                  <div className="  gap-6 ml-6 mr-6 grid sm:grid-cols-2  lg:grid-cols-4">
                    {allimages.map((image, index) => (
                      <div key={image}>
                        <img src={image} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className=" text-xl ml-12 mt-10 mb-10  text-semibold ">
                Villa Location
              </h1>
              {villa?.coordinate?.lat}

              <MapWithNoSSR
                image={Selectedimage}
                lat={geoData.lat}
                lng={geoData.lng}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Villaid;
