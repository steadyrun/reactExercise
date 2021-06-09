// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';

function App() {
  const test = '그저 바라만 보아도..'
  const condition = true
  const style ={
    backgroundColor : 'gray'
    , border: '1px solid blue'
    , height: Math.round(Math.random() * 300) + 50
    , width : Math.round(Math.random() * 700) + 50
    , WebkitTansition: 'all'
    , MozTransition: 'all'
    , msTransition: 'all'
  }
 
  return (
    <Fragment >
      <h1>react 안녕!</h1>
      <h2>반가워!~!~</h2>
      <h3 className='my-div'>{test}</h3>
      {
        condition ?  '맞아요' : null
      }
      <br/>
      <div style={style}>
      {condition && '보이면 맞는거야~'}
        </div>
    </Fragment>
  );
}

export default App;
