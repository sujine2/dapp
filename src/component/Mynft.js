import '../Mynft.css';
import React from 'react';
import { Button, Row, Col, Container, Modal,Form } from 'react-bootstrap';
import ModalInfo from './ModalInfo';

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
            PUT UP FOR AUCTION
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="mdBody">
        <h4>--nft Name -- </h4>
        <div className="mdImg">
            <img src={props.img} />
        </div>
        <div className="mdInput">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>tokenAddress</Form.Label>
                    <Form.Control placeholder="Token Address" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>tokenId</Form.Label>
                    <Form.Control placeholder="Token Id" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>openPrice</Form.Label>
                    <Form.Control placeholder="Open Price" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>startTime</Form.Label>
                    <Form.Control placeholder="Start Time" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Mynft(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="Iist">
        {props.isAuction?  <ModalInfo show={modalShow} onHide={() => setModalShow(false)} img={props.img} 
        crypto={props.crypto} cryptoName={props.cryptoName} hPrice={props.hPrice} lPrice={props.lPrice}/> 
        : <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} img={props.img}/>  }
        
        {props.isAuction?
        <div className="nft-" onClick={() => setModalShow(true)}>
            <img src={props.img}  />
            <div className="nft--">
                <h2>Auction</h2>
            </div>   
        </div>  
        :
        <figure className="nft" onClick={() => setModalShow(true)}>
            <img src={props.img}/>
            <figcaption>
                <div>
                    <h1></h1>
                    <h1 >Auction</h1>
                </div>
            </figcaption>
        </figure>  
        }
    </div>
  );
}

export default Mynft;