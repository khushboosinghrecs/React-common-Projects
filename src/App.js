import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importing components
import ChangeText from './components/Changetext';
import ImgCorousal from './components/Imgcorousal';
import Accordion from './components/Accordion';
import Quotes from './components/Quotes';
import ShoppingList from './components/ShoppingList';
import GithubUser from './components/GithubUser';
import VedioPlayer from './components/VedioPlayer';
import BmiCalc from './components/Bmicac';
import Main from './components/contextApi/Main';
import { AppProvider } from './components/contextApi/Context';
import EmployeeDetail from './components/crud/EmployeeDetails';
import Timer from './components/Timer';
import Table from './components/Table/Table';
import { tableData } from './components/Table/Data';
import TictacToe from './components/Tic-Tac-Toe/TicTacToe';
import Checkdiff from './components/Checkdiff';
import DiffUseMemoUseEffect from './components/DiffUseMemoUseEffect';
import User from './components/customHooks/User';
import { Child } from './components/SendDataFromChildToParent/Child';
import TableComponent from './components/Table/TableComponent';
import BreadCrumb from './components/Table/Breadcrumb';
import { ReecoApp } from './components/ReecoApp/ReecoApp';
import { DownloadVedio } from './components/downloadFile/DownloadVedio';
import { DonloadVedioFile } from './components/downloadFile/DownLoadVedioFile';
import ChessBishop from './components/ChessBishop/ChessBishop';
import ColorPicker from './components/colorPicker/ColorPicker';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import Planet from './components/SearchPlanets';
import LazyLoad from './components/LazyLoading/LazyLoad';
import {Jwt} from './components/jwt/Jwt'

// Main App Component
function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          {/* Navigation Links */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/changetext">ChangeText</Link></li>
              <li><Link to="/imgcorousal">ImgCorousal</Link></li>
              <li><Link to="/accordion">Accordion</Link></li>
              <li><Link to="/quotes">Quotes</Link></li>
              <li><Link to="/shoppinglist">ShoppingList</Link></li>
              <li><Link to="/githubuser">GithubUser</Link></li>
              <li><Link to="/vedioplayer">VedioPlayer</Link></li>
              <li><Link to="/bmicac">BmiCalc</Link></li>
              <li><Link to="/main">Main</Link></li>
              <li><Link to="/employeedetail">EmployeeDetail</Link></li>
              <li><Link to="/timer">Timer</Link></li>
              <li><Link to="/table">Table</Link></li>
              <li><Link to="/tictactoe">TictacToe</Link></li>
              <li><Link to="/checkdiff">Checkdiff</Link></li>
              <li><Link to="/diffusememo">DiffUseMemoUseEffect</Link></li>
              <li><Link to="/user">User</Link></li>
              <li><Link to="/child">Child</Link></li>
              <li><Link to="/breadcrumb">BreadCrumb</Link></li>
              <li><Link to="/reecoapp">ReecoApp</Link></li>
              <li><Link to="/downloadvedio">DownloadVedio</Link></li>
              <li><Link to="/donloadvediofile">DonloadVedioFile</Link></li>
              <li><Link to="/chessbishop">ChessBishop</Link></li>
              <li><Link to="/colorpicker">ColorPicker</Link></li>
              <li><Link to="/shoppingcart">ShoppingCart</Link></li>
              <li><Link to="/planet">Planet</Link></li>
              <li><Link to="/lazyload">LazyLoad</Link></li>
              <li><Link to="/jwt">Jwt</Link></li>
            </ul>
          </nav>

          {/* Routing Setup */}
          <Routes>
            <Route path="/" element={<h1>Welcome to the App!</h1>} />
            <Route path="/changetext" element={<ChangeText />} />
            <Route path="/imgcorousal" element={<ImgCorousal />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/shoppinglist" element={<ShoppingList />} />
            <Route path="/githubuser" element={<GithubUser />} />
            <Route path="/vedioplayer" element={<VedioPlayer />} />
            <Route path="/bmicac" element={<BmiCalc />} />
            <Route path="/main" element={<Main />} />
            <Route path="/employeedetail" element={<EmployeeDetail />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/table" element={<Table data={tableData} />} />
            <Route path="/tictactoe" element={<TictacToe />} />
            <Route path="/checkdiff" element={<Checkdiff />} />
            <Route path="/diffusememo" element={<DiffUseMemoUseEffect />} />
            <Route path="/user" element={<User />} />
            <Route path="/child" element={<Child />} />
            <Route path="/breadcrumb" element={<BreadCrumb />} />
            <Route path="/reecoapp" element={<ReecoApp />} />
            <Route path="/downloadvedio" element={<DownloadVedio />} />
            <Route path="/donloadvediofile" element={<DonloadVedioFile />} />
            <Route path="/chessbishop" element={<ChessBishop />} />
            <Route path="/colorpicker" element={<ColorPicker />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/planet" element={<Planet />} />
            <Route path="/lazyload" element={<LazyLoad />} />
            <Route path="/jwt" element={<Jwt />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
