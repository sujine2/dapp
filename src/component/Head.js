import '../Head.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className="head">
      <div className="title">
        <Link to="/">
        Klay Dutch Auction
        </Link>
      </div>
      <div className="myPage">
        <div className="eff-1" />
        <Link to="/myPage"> My Page </Link>
      </div>
    </div>
  );
}

export default Head;
