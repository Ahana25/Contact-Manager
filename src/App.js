import React from "react";
import NavBar from './Components/NavBar';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Home'
import AllUser from './Components/AllUser'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import SearchUser from './Components/SearchUser'
import SortUser from './Components/SortUser'
import ViewUser from './Components/ViewUser'
import Error from './Components/Error'


function App() {
  return (
    <div className="App">
    <NavBar/>  
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/all' component={AllUser}/>
    <Route exact path='/add' component={AddUser}/>
    <Route exact path='/edit/:id' component={EditUser}/>
    <Route exact path='/view/:id' component={ViewUser}/>
    <Route exact path='/sort' component={SortUser}/>
    <Route component={Error}/>
    </Switch>
   
  
    </div>
  );
}

export default App;
