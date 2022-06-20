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
