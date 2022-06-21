import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Calendar, utils } from "react-modern-calendar-datepicker";
import moment from "moment";
import { useState } from "react";
import { globaluse } from "../../context/global";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,     
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({villadiabledays,villaid}) {

    const { senddisabledDays } = globaluse();

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
    


      const disabledTimes = [];

      const [disabledDays, setDisabledDays] = useState([]);
    
      const [unavailableTimes, setUnavailableTimes] = useState([]);
    
      const handleCalendar = (e) => {
        setSelectedDate(e);
        console.log(e); // handle selected date
        setDisabledDays([...disabledDays, e]);
      };
    


  // send disabledDays to the firebase

  const sendDisabledDays = () => {
    console.log("---->", disabledDays);
    console.log(villaid);
    senddisabledDays(villaid, disabledDays);
  };





  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div
     
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          select you dates
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

                <div>
                  <button onClick={sendDisabledDays}>make check in</button>
                </div>
              </div>
            </div>





          </Typography>
        </Box>
      </div>
    </div>
  );
}
