import '../Item.css';
import React from 'react';
import ModalInfo from './ModalInfo';
import { Button, Row, Col, Container, Modal } from 'react-bootstrap';


function Item(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="Iist">
        <ModalInfo show={modalShow} onHide={() => setModalShow(false)} buy="true"
        img={props.img} crypto={props.crypto} cryptoName={props.cryptoName} hPrice={props.hPrice} lPrice={props.lPrice}/>  
      
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