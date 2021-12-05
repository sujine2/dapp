import '../Item.css';
import React from 'react';
import { Button, Row, Col, Container, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Item(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="Iist">
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>  
      
        <figure className="item" onClick={() => setModalShow(true)}>
            <img src={props.img}  />
            <figcaption>
                <p className="text">
                <div class="time">
                Time:&nbsp;&nbsp;&nbsp;{props.time}
                </div>
                <div class="day">
                Price:&nbsp;&nbsp;&nbsp;{props.price}
                </div>
                </p>
            </figcaption> 
        </figure>   
    </div>
  );
}

export default Item;