import React from 'react';
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

const Villaid = () => {
const router = useRouter();
    const Villaid = router.query.villaid
    console.log('single villa id---->',Villaid)

    const [villa] = useDocumentData(doc(db, "villas", Villaid));



    return (
        <div>
            <h1>Villa {villa?.name}</h1>
        </div>
    );
}

export default Villaid;
