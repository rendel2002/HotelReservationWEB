import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom'; 
import Error from '../components/Error';
import moment from 'moment';

function Bookings() {
  const { roomid, fromdate, todate } = useParams(); // Use useParams to access the URL parameters
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState(null);

  const totalDays = moment(todate).diff(moment(fromdate), 'days')+1 // Calculate the total days

  useEffect(() => {
    async function fetchRoomData() {
      try {
        setLoading(true);
        const response = await axios.post(`/api/rooms/getroombyid`, { roomid });
        const data = response.data;
        setRoom(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }

    fetchRoomData();
  }, [roomid]);

  return (
    <div className='container'>
      {loading ? (
        <h1><Loader/></h1>
      ) : error ? (
        <Error/>
      ) : room ? (
        <div className='row justify-content-center mt-5 bs'>
          <div className='col-md-5'>
            <h1>{room.name}</h1>
            {room.imageurls[0] && <img src={room.imageurls[0]} className='rounded h-55 w-100'/>}
          </div>
          <div className='col-md-5 m-1'>
            <div style={{textAlign: 'right'}}>
              <h1 className='text-muted text-decoration-underline'>Booking Details</h1>
              <b>
                <p>Name: </p>
                <p>From Date: {fromdate}</p>
                <p>To Date: {todate}</p>
                <p>Max Count: {room.maxcount}</p>
              </b>
            </div >
            <b style={{textAlign: 'right'}}>
              <h1 className='text-muted text-decoration-underline'>Amount</h1>
              <p>Total Days: {totalDays}</p> {/* Display the calculated total days */}
              <p>Rent per day: {room.rentperday}  </p>
              <p>Total Amount </p>
            </b>
            <div style={{textAlign: 'right'}}> 
              <button className='btn btn-warning'>Pay Now</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Bookings;