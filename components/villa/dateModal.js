import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import moment from "moment";
import { useState } from "react";


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
    console.log("---->", disabledDays);
    console.log(villaid);
    senddisabledDays(villaid, disabledDays);
    setDisabledDays([]);
  };

// close modal 

const handleclose = () =>{ setOpenmodal(false)

console.log("close -------");

}


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className=" flex justify-between ml-6 mr-6">
              <div></div>

              <div
              onClick={handleclose }
              >
                <img
                
                  className=" absolute w-12 h-12"
                  src="https://cdn2.iconfinder.com/data/icons/top-search/128/_delete_close_remove_circle_cancel_delete_trash-256.png"
                  alt=""
                />
              </div>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* // data picke- */}

            <div>
              <div className="flex flex-col">
                <Calendar
                  value={selectedDate}
                  onChange={handleCalendar}
                  minimumDate={utils().getToday()}
                  maximumDate={maximumDate}
                  shouldHighlightWeekends
                  //disabledDays={disabledDays}
                  disabledDays={villadiabledays}
                />

<div className="  pb-6 flex mr-6 ml-6 justify-between">


                <div>
              <p className=" font-bold  text-red-500">Days : {disabledDays.length} </p>    
                  <p className=" font-bold text-xl text-teal-700">Total Price  {disabledDays.length * villaprice}</p>
                  {/* <button onClick={sendDisabledDays}>make check in</button> */}
                </div>

<div>
<Button 
                  onClick={sendDisabledDays}
                  
                  className=" mt-[6px] bg-[#1565c0]" variant="contained">make check in</Button>

</div>

</div>

              </div>
            </div>
          </Typography>
        </Box>
      </div>
    </div>
  );
}
