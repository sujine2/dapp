import React from 'react';
import ReactDOM from 'react-dom';
import List from './component/List';
import Head from './component/Head';
import MynftList from './component/MynftList';
import './index.css';
import {BrowserRouter, Routes, Route, react} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';


function MyPage(){
  return (
    <div className="NFT">
      <p class="text-">My NFT</p>
      <MynftList/>
    </div>
  );
}

function Home(){
  return (
      <div className="Home">
          <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis molestie est quis sodales.</p>
          <br/><br/>
          <List/>
      </div>
  );
}

function App() {
  return (
      <BrowserRouter>
        <Head></Head>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/myPage" element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
