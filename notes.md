work

import \* as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
//import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

export default function StaticDateRangePickerDemo() {
const [value, setValue] = React.useState([null, null]);

return (
<LocalizationProvider
dateAdapter={AdapterDateFns}
localeText={{ start: 'Check-in', end: 'Check-out' }}

>

    <DateRangePicker
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(startProps, endProps) => (
        <React.Fragment>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </React.Fragment>
      )}
    />

  </LocalizationProvider>
  
  );
}
-----------------------------------------------------------------------

- const max = moment().add(12, 'days').toDate();



- map component
----------------
----------------

import { useState,useEffect,useRef } from 'react'

import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'

function Home() {

const [markerPos, setMarkerPos] = useState({
lang: 29.916668,
Lat: 40.766666 ,
})
const [fixedMarkerPos, setFixedMarkerPos] = useState({
lang: 29.916668,
Lat: 40.666666 ,
})

const changeMarkerPos = (e) => {

    console.log('changeMarkerPos--->',markerRef.current._latlng)
    setMarkerPos({
      lang:  markerRef.current._latlng.lng,
      Lat: markerRef.current._latlng.lat,
    })
    console.log('changeMarkerPos', markerPos)

}

useEffect(() => {
console.log(`lat diff: ${markerPos.Lat - fixedMarkerPos.Lat}, lng diff: ${markerPos.lang - fixedMarkerPos.lang}`);
},[markerPos, fixedMarkerPos])

const markerRef = useRef();
const fixedMarkerRef = useRef();

const updatePosition = () => {
const marker = markerRef.current
if (marker != null) {
const newPos = {...marker.leafletElement.getLatLng()};
console.log('-----------------here now',newPos);
setMarkerPos(newPos);
}
}

return (
<div className="App">
<header className="App-header">

<MapContainer
center={[markerPos.Lat, markerPos.lang]}

zoom={13} scrollWheelZoom={false}>
<TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
<Marker

    draggable={true}
    onDragend={updatePosition}
    ref={markerRef}
    position={[markerPos.Lat, markerPos.lang]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

    <Marker
          position={[fixedMarkerPos.Lat, fixedMarkerPos.lang]}
          ref={fixedMarkerRef}
        />

</MapContainer>,

<div>
  <h1
  onClick={changeMarkerPos}
  >change maps</h1>
  <p>  {markerPos.Lat}  ------  {markerPos.lang}</p>
</div>

      </header>
    </div>

)
}

export default Home

----------------------------------------


 <div>
            <div>


            <img src={villa.img} alt={villa.name} />


<div className="villa-info">
    <h2>{villa.name}</h2>

    <h3>{villa.koordinat.lat}</h3>
    <h3>{villa.koordinat.lng}</h3>
    <h3>{villa.price}</h3>
    </div>


<div>
<MapContainer
center={[markerPos.Lat, markerPos.lang]}

zoom={13} scrollWheelZoom={false}>
<TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
<Marker

    draggable={true}
    onDragend={updatePosition}
    ref={markerRef}
    position={[markerPos.Lat, markerPos.lang]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

    <Marker
          position={[fixedMarkerPos.Lat, fixedMarkerPos.lang]}
          ref={fixedMarkerRef}
        />
    </MapContainer>
</div>


            </div>
        </div>

        ----------------------------------

* 
Hoeme Odl
------------

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import moment from "moment";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {globaluse} from "../context/global";
export default function Home() {


  
  const [selectedDate, setSelectedDate] = useState({
    year: moment().year(),
    month: moment().month() + 1,
    day: moment().date(),
  });

  var date = new Date();

  const maximumDate = {
    year: moment().year(),
    month: moment().month() + 1,
    day: `${moment().date() + 12}`,
  };


const {villas} = globaluse();


  const disabledTimes = [];

  const [disabledDays, setDisabledDays] = useState([]);

  const [unavailableTimes, setUnavailableTimes] = useState([]);

  const handleCalendar = (e) => {
    setSelectedDate(e);
    console.log(e); // handle selected date
    setDisabledDays([...disabledDays, e]);
  };

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
          crossorigin=""
        />

        <script
          src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
          crossorigin=""
        ></script>
      </Head>

      <div>
        
        <div className="flex flex-col">
          <Calendar
            value={selectedDate}
            onChange={handleCalendar}
            minimumDate={utils().getToday()}
            maximumDate={maximumDate}
            shouldHighlightWeekends
            disabledDays={disabledDays}
          />

         
        </div>
       
      </div>
    </div>
  );
}







==================================


  <div>
        <div>
          <div className="  grid sm:grid-cols1  shadow-2xl  mt-12  lg:min-h-[400px] ml-6 mr-6  pb-12  lg:grid-cols-2">
            {/* -----image--- */}

            <div className="  lg:mt-12  sm:w-full">
              <img
                className="  ml-8 w-[494px]  h-[322px] object-cover"
                src={villa?.images[0]}
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