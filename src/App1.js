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
      <br
        // 이건 주석.
        // self-closed 태그 내에선 이렇게 작성이 가능하쥐~
      />
      <div style={style}>
      {condition && '보이면 맞는거야~'}
      {/*이건 주석이겠지? */}
      {
        //그럼 이건 주석이 아닐까? 
      }
      //요건 주석이 아니겠지. javascript처럼 인식이 되지 않으니.
      /** 정리해보면 javascript 형태로 주석을 작성해야 하고, 
      self-closed tag 내에서만 지원되도록 jsx가 만들어져 있어. */
        </div>
    </Fragment>
  );
}

export default App;
