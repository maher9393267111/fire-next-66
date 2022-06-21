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
       // setDisabledDays([...disabledDays, e]);

        
 const existcheck = disabledDays.filter((day) => {
  return  day.day === e.day  && day.month === e.month  
 //   console.log(day.day === e.day,day,e.day);
    }
)

console.log("existcheck", existcheck);

        if(existcheck.length === 0){

            setDisabledDays([...disabledDays, e]);
        }
        else{
            setDisabledDays(disabledDays.filter((day) => {
                return  day.day !== e.day  || day.month !== e.month

            }
            ))
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





  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div
     
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          
<div className=' flex justify-between ml-6 mr-6'>
    <div>

    </div>

<div>
    <img className=' absolute w-12 h-12' src="https://cdn2.iconfinder.com/data/icons/top-search/128/_delete_close_remove_circle_cancel_delete_trash-256.png" alt="" />
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

                <div>
                    {disabledDays.length}
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
