import '../ModalInfo.css';
import React from 'react';
import { Button, Row, Col, Container, Modal } from 'react-bootstrap';

function ModalInfo(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            BUY NFT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <div className="mdImg-">
              <img src={props.img} />
          </div>
          <div className="mdInfo">
            <p>Crypto : &nbsp;&nbsp;&nbsp;{props.crypto} </p>
            <p>Crypto Name : &nbsp;&nbsp;&nbsp;{props.cryptName} <br/></p>
            <p>Highest Price : &nbsp;&nbsp;&nbsp;{props.hPrice} Klay <br/></p>
            <p>Lowest Price : &nbsp;&nbsp;&nbsp;{props.lPrice} Klay <br/></p>
            <p>Start Time : &nbsp;&nbsp;&nbsp;10M 01D &nbsp;&nbsp;00:00<br/></p>
            <p>End Time : &nbsp;&nbsp;&nbsp;12M 13D &nbsp;&nbsp;00:00<br/></p>
            <br/>
            <p>Price decreases per second : <br/> &nbsp;&nbsp;&nbsp;0.5Klay <br/></p>
            {props.buy?
            <Button>Buy</Button>: null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default ModalInfo;