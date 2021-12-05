import '../List.css';
import React from 'react';
import Item from './Item';
import { Button, Row, Col, Container, Modal } from 'react-bootstrap';

function List() {
  
  return (
    <div className="List">
      <div className="section">
        <Item img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" time="00M 00D" price="1klay"/>
        <Item img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample21.jpg" time="00M 00D" price="1klay"/>
        <Item img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" time="00M 00D" price="1klay"/>
      </div>

      <div className="section">
        <Item img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample32.jpg" time="00M 00D" price="1klay"/>
        <Item img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg" time="00M 00D" price="1klay"/>
      </div>


      <div className="section">
        <Item img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample72.jpg" time="00M 00D" price="1klay"/>
        <Item img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" time="00M 00D" price="1klay"/>
      </div>
    </div>
  );
}

export default List;