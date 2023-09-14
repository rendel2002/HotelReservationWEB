import React, {useState} from 'react';
import {Modal, Button, Carousel, } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Room({ room, fromdate, todate }) { 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row bs rounde'>
       <div className='col-md-5'>
        <img src={room.imageurls[0]} className='rounded h-100 w-100'/>
       </div>
       <div className='col-md-7 '>
         <h1>{room.name}</h1>
         <b>
         <p>Max Count: {room.maxcount}</p>
         <p>Phone Number: {room.phonenumber}</p>
         <p>Type: {room.type}</p>
         </b>
         <div style={{float: 'right'}}>
         <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
            <button className='btn bg-warning m-2'>Book Now</button>
          </Link>
          <button className='btn bg-warning ' onClick={handleShow}>View Details</button>
         </div>
       </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header >
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map(url=>{
              return <Carousel.Item>

                <img className='d-block w-100 bigimg' src={url}/>
              </Carousel.Item>
            })}
          </Carousel>
          <p>{room.description}</p>
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Room;