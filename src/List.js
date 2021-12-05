import './List.css';
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

function List() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="List">
      <div className="section">
        <figure className="item" onClick={() => setModalShow(true)}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"  />
          <figcaption>
              <p className="text">Time:&nbsp;&nbsp;&nbsp;00M 00D</p>
              <p className="text">Pice:&nbsp;&nbsp;&nbsp;1 klay
              </p>  
          </figcaption> 
        </figure>    
        <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />  
        <figure className="item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg"  />
          <figcaption>
              <p className="text">Time:&nbsp;&nbsp;&nbsp;00M 00D</p>
              <p className="text">Pice:&nbsp;&nbsp;&nbsp;1 klay</p>     
          </figcaption> 
        </figure>
        <figure className="item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" alt="sq-sample17" />
          <figcaption>
              <p className="text">Time:&nbsp;&nbsp;&nbsp;00M 00D</p>
              <p className="text">Pice:&nbsp;&nbsp;&nbsp;1 klay</p>     
          </figcaption> 
        </figure>

      </div>

      <div className="section">
        <figure className="item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample32.jpg" alt="sq-sample32" />
          <figcaption>
              <p className="text">Time:&nbsp;&nbsp;&nbsp;00M 00D</p>
              <p className="text">Pice:&nbsp;&nbsp;&nbsp;1 klay</p>     
          </figcaption> 
        </figure>

        <figure className="item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg" alt="sq-sample27" />
          <figcaption>
              <p className="text">Time:&nbsp;&nbsp;&nbsp;00M 00D</p>
              <p className="text">Pice:&nbsp;&nbsp;&nbsp;1 klay</p>     
          </figcaption> 
        </figure>    
      </div>


      <div className="section">
        <figure className="item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample72.jpg" alt="sample72"/>
          <figcaption>
              <p className="text">Time: &nbsp;&nbsp;&nbsp;00M 00D</p>
              <p className="text">Pice: &nbsp;&nbsp;&nbsp;1 klay</p>     
          </figcaption> 
        </figure>
        <figure className="item">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" alt="sq-sample17" />
          <figcaption>
              <p className="text">Time:&nbsp;&nbsp;&nbsp;00M 00D</p>
              <p className="text">Pice:&nbsp;&nbsp;&nbsp; 1 klay</p>     
          </figcaption> 
        </figure>
      </div>
    </div>
  );
}

export default List;