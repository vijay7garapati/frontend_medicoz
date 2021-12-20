

import './App.css';
import Navbar from '../src/Comman/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Route,Switch } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Dashboard from './Component/Dashboard';
import List from './Lifecycle/List';
import AddPersons from './Component/AddPersons';
import ViewPersonDetails from './Component/ViewPersonDetails';
import AllUsers from './AnotherWays/AllUsers';
import EditPersons from './Component/EditPersons';
function App() {
  return (
   <div>
       <Navbar/> 
     
     <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/dashboard" component={Dashboard}/>
  
    <Route exact path="/users/add" component={AddPersons}/>
    <Route exact path="/edit/:id" component={EditPersons}/>
    <Route exact path="/users/:id" component={ViewPersonDetails}/>
    <Route exact path="/lifecyclelist" component={List}/>
    <Route exact path="/viewPersonDetails" component={ViewPersonDetails}/>
    <Route exact path="/allUsers" component={AllUsers}/>
     </Switch>
     
    </div>
  );
}

export default App;
