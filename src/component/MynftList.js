import '../MynftList.css';
import React from 'react';
import Mynft from './Mynft';
import { Button, Row, Col, Container, Modal } from 'react-bootstrap';

function List() {
  
  return (
    <div className="nftList">
      <div className="section-">
        <Mynft img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg" time="00M 00D" price="1klay" isAuction="true"/>
        <Mynft img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg" time="00M 00D" price="1klay"/>
        <Mynft img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample72.jpg"  time="00M 00D" price="1klay"/>
      </div>

      <div className="section-">
        <Mynft img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample51.jpg"  time="00M 00D" price="1klay"/>
        <Mynft img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample31.jpg" time="00M 00D" price="1klay" isAuction="true"/>
      </div>


      <div className="section-">
        <Mynft img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample72.jpg" time="00M 00D" price="1klay"/>
        <Mynft img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" time="00M 00D" price="1klay"/>
      </div>
    </div>
  );
}

export default List;