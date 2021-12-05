import Head from './component/Head';
import List from './component/Head';
import './index.css';
import {BrowserRouter, Route, Switch, react} from 'react-router-dom'
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="Home">
            <Head/>
            <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis molestie est quis sodales.</p>
            <br/><br/>
            <List/>
        </div>
    );
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
