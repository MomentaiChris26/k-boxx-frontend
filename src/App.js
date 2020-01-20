import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/layout/header';
import Landing from './components/pages/Landing';
import Admin from './components/pages/Admin';
import AddSong from './components/forms/AddSong';
import ListSongsAdmin from './components/pages/ListSongsAdmin';
import EditSong from './components/forms/EditSong'

function App() {
  return (
    <Router> 
    <div className="content">
     <Header/>
     <Switch>
       <Route path="/" exact component={Landing}/>
       <Route path="/admin" exact component={Admin}/>
       <Route path="/addSong" exact component={AddSong}/>
       <Route path="/listSongs" exact component={ListSongsAdmin}/>
       <Route path="/editSong" exact component={EditSong}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
