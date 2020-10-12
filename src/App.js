import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, decrement, increment } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  const btnLogin = login ? 'LOGOUT' : 'LOGIN'
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(decrement())} className="btn btn-danger mx-1"><i className="fa fa-minus" /></button>
      <button onClick={() => dispatch(increment())} className="btn btn-success mx-1"><i className="fa fa-plus" /></button>
      <span>{login ? <h3>You already Login!</h3> : <h3>You must Login!</h3>}</span>
      <button onClick={() => dispatch(auth())} className="btn btn-primary">{btnLogin}</button>
    </div>
  );
}

export default App;