import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import { DatePicker } from 'antd';


const { RangePicker } = DatePicker;

function Home() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dateRange, setDateRange] = useState([]); // Store the selected date range as an array

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (await axios.get('/api/rooms/getallrooms')).data;
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function filterByDate(dates) {
    setDateRange(dates); // Store the selected date range as an array

    // You can format the dates as needed when displaying
    console.log('From Date:', moment(dates[0]).format('DD-MM-YYYY'));
    console.log('To Date:', moment(dates[1]).format('DD-MM-YYYY'));
  }

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-3 '>
          <RangePicker  format='DD-MM-YYYY' onChange={filterByDate} value={dateRange} />
        </div>
      </div>
      <div className='row justify-content-center mt-5'>
        {loading ? (
          <Loader />
        ) : rooms.length > 0 ? (
          rooms.map((room) => (
            <div className='col-md-9 mt-5' key={room._id}>
              <Room room={room} fromdate={dateRange[0]} todate={dateRange[1]} />
            </div>
          ))
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

export default Home;