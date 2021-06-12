import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  // const [user, setuser] = useState(null);
  const [{user},dispatch]=useStateValue()


  return (
    <>
      
     <Router>
      {
        !user?(<Login/>):
                                    (
                                      <>
                                      <Header/>             {/* Header */}
                                      <div className="app__body">
                                        <Sidebar/>        {  /* sidebar */}

                                        <Switch>
                                          <Route path="/room/:roomId">
                                            {/* <h1>JS deve chat screen</h1> */}
                                            <Chat/>
                                          </Route>
                                          <Route exect path="/">
                                            <h1>chat room</h1>
                                          </Route>
                                        </Switch>          
                                      </div>
                                      </>
                                    )
        }
      </Router>
      
    </>
 );
}

export default App;
