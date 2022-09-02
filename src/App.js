import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './components/Reducers/userSlice'
import Login from './components/Login/Login';
import { auth } from './firebase';

function App() {
  //allows us to shoot things into the datalayer
  const dispatch = useDispatch()
  //selects user from the data layer
  const user = useSelector(selectUser)

  useEffect(() => { //listens for change in user and reloads accordingly
    auth.onAuthStateChanged((authUser) => {
      if (authUser){
        //user log in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        //user log out
        dispatch(logout())
      }
    })
  
  }, [dispatch])
  
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar/>
          <Chat />
        </>
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
