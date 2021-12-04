import './List.css';
import { Button, Row, Col, Container } from 'react-bootstrap';

function List() {
  return (
    <div className="List">
      <figure className="item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" alt="sample71" />
        <figcaption>
            <p>Time: ~~~</p>
            <p>Pice: 1 klay</p>     
        </figcaption> 
      </figure>    
    </div>
  );
}

export default List;