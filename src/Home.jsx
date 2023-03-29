import React, {useState} from 'react'
import main from './assets/main.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    document.title = 'National Open University of Nigeria'
  return (
    <div>
        <img onClick={handleShow} className='home' src={main} alt="text" width='1340' draggable='ni' />

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Announcement!!</Modal.Title>
        </Modal.Header>
        <Modal.Body> Dear student, please be informed that the student portal is currently undergoing maintenance. Check back later!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Home