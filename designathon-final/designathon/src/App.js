import React,{useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './Login'
import Header from './Header'
import Welcome from './Welcome'
import Home from './Home'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function App() {
  const  [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user: null
        })
      } 
    })
    return ()=>{
      unsubscribe();
    }

  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
          <Route path='/'>
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
