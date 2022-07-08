import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './component/Navbaar' 
import Home from './component/Home';
import Register from './component/Register';
import Edit from './component/Edit';
import Details from './component/Details';

import {Switch,Route} from "react-router-dom"
function App() {
  return (
    <>
     <Navbaar />
     <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/Register" component = {Register}/>
        <Route exact path="/edit/:id" component = {Edit}/>
        <Route exact path="/view/:id" component = {Details}/>
     </Switch>
    </>
  );
}

export default App;
