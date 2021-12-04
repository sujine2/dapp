import './Head.css';
import { Button, Row, Col, Container } from 'react-bootstrap';

function Head() {
  return (
    <div className="head">
      <div className="title">Klay Dutch Auction</div>
      <div className="myPage">
        <div className="eff-1" />
        <a href="#"> My Page </a>
      </div>
    </div>
  );
}

export default Head;
