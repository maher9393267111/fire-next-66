import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import moment from "moment";
import { useState } from "react";
import DatePicker  from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";


import { globaluse,openmodal, setOpenmodal } from "../../context/global";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 477,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ villadiabledays, villaid ,villaprice, }) {
  const { senddisabledDays } = globaluse();

  const [selectedDate, setSelectedDate] = useState({
    year: moment().year(),
    month: moment().month() + 1,
    day: moment().date(),
  });

  const [totalprice, setTotalprice] = useState(0);

  var date = new Date();

  const maximumDate = {
    year: moment().year(),
    month: moment().month() + 1,
    day: `${moment().date() + 12}`,
  };

  const disabledTimes = [];

  const [disabledDays, setDisabledDays] = useState([]);

  const [unavailableTimes, setUnavailableTimes] = useState([]);

  const handleCalendar = (e) => {
    setSelectedDate(e);
    console.log(e); // handle selected date
    // setDisabledDays([...disabledDays, e]);

    const existcheck = disabledDays.filter((day) => {
      return day.day === e.day && day.month === e.month;
      //   console.log(day.day === e.day,day,e.day);
    });

    console.log("existcheck", existcheck);

    if (existcheck.length === 0) {
      setDisabledDays([...disabledDays, e]);
    } else {
      setDisabledDays(
        disabledDays.filter((day) => {
          return day.day !== e.day || day.month !== e.month;
        })
      );
    }

    console.log("disabledDays", disabledDays);
  };

  // send disabledDays to the firebase

  const sendDisabledDays = () => {
    console.log("----> 🛍️ ---- 🛍️", disabledDays);
    console.log(villaid);
    senddisabledDays(villaid, disabledDays);

    console.log("---->  🛍️🛍️🛍️🛍️ 🛍️", villadiabledays,date);
    setDisabledDays([]);
  };

// close modal 

const handleclose = () =>{ setOpenmodal(false)

console.log("close -------");

}


//

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(null);
const onChange = (dates) => {
  const [start, end] = dates;
  setStartDate(start);
  setEndDate(end);
 // set disabledDays  friom start to end
    const disabledDaysarray = [];
    const startDate = new Date(start);
  
    const endDate = new Date(end);
    const diff = endDate.getTime() - startDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    for (let i = 0; i < days; i++) {
        const day = new Date(startDate);
        day.setDate(day.getDate() + i);
        disabledDaysarray.push(day);
        setDisabledDays(disabledDaysarray);
    }

  

        console.log("disabledDays 🔥🔥🔥", disabledDays);

}





  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div>
        <Box sx={style}>
          
          <div>
          <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
     // excludeDates={ villadiabledays}
     excludeDates={villadiabledays}
      selectsRange
      maxDate={ maximumDate }
      selectsDisabledDaysInRange
      inline
    />
          </div>

<div>
    <button
    onClick={sendDisabledDays}
    >
        send disable days  
    </button>
</div>


          </Box>
      </div>
    </div>
  );
}
