import logo from './logo.svg';
import './App.css';
import ChangeText from './components/Changetext'
import ImgCorousal from './components/Imgcorousal'
import Accordion from './components/Accordion';
import Quotes from './components/Quotes';
import ShoppingList from './components/ShoppingList';
import GithubUser from './components/GithubUser';
import VedioPlayer from './components/VedioPlayer';
import BmiCalc from './components/Bmicac';
import Main from './components/contextApi/Main';
import { AppProvider } from './components/contextApi/Context';
import EmployeeDetail from './components/crud/EmployeeDetails'
import Timer from './components/Timer';
import Table from './components/Table/Table';
import {tableData} from './components/Table/Data'
import TictacToe from './components/Tic-Tac-Toe/TicTacToe';
import UseEffectandUSeMemo from './components/Checkdiff';
import Checkdiff from './components/Checkdiff';
import DiffUseMemoUseEffect from './components/DiffUseMemoUseEffect';
import User from './components/customHooks/User';
import { Child } from './components/SendDataFromChildToParent/Child';
import TableComponent from './components/Table/TableComponent';
import BreadCrumb from './components/Table/Breadcrumb';
import { ReecoApp } from './components/ReecoApp/ReecoApp';
import { DownloadVedio } from './components/downloadFile/DownloadVedio';
import {DonloadVedioFile} from './components/downloadFile/DownLoadVedioFile'
import ChessBishop from './components/ChessBishop/ChessBishop';
import ColorPicker from './components/colorPicker/ColorPicker';
import {ShoppingCart} from './components/ShoppingCart/ShoppingCart';
import Planet from './components/SearchPlanets';
import LazyLoad from './components/LazyLoading/LazyLoad';
function App() {
  return (
    <AppProvider>
    <div className="App">
       {/* <Main />
      <ChangeText />
      <ImgCorousal />
      <Accordion />
      <Quotes />
      <ShoppingList />
      <GithubUser />
      <VedioPlayer />
      <BmiCalc />  */}
      {/* <EmployeeDetail /> */}
      {/* <Timer/> */}
      {/* <Table  data = {tableData}/> */}
      {/* <TableComponent data ={tableData} /> */}
      {/* <TictacToe /> */}
      {/* {<Checkdiff />} */}
      {/* {<DiffUseMemoUseEffect />} */}
      {/* <User /> */}
      {/* <Child /> */}
      {/* <BreadCrumb /> */}
      {/* <ReecoApp /> */}
      {/* <DownloadVideo /> */}
      {/* <DownloadVedio />
      <DonloadVedioFile /> */}
      {/* <ColorPicker /> */}
      {/* <ChessBishop /> */}
      {/* <ShoppingList /> */}
      {/* <ShoppingCart/> */}
    {/* <Planet /> */}
    <LazyLoad />
    </div>
    </AppProvider>
  );
}

export default App;
