import React from 'react';
import './App.css';
import Posts from "./components/Posts";
import {useSelector} from "react-redux";
import PopUp from "./components/PopUp";

function App() {
  /** Состояние видимости всплывающего окна **/
  const  popUpVisible = useSelector(state => state.popUpVisible);

  return (
    <div className="App">
      {/** Вывод компонента всплывающего окна относительно состояния popUpVisible **/}
      {popUpVisible && <PopUp/>}
      <div className="container">
        <div className="text-center mt-2 mb-2"> <h1>TEST APP</h1> </div>
        <div className="row">
          <Posts/>
        </div>
      </div>
    </div>
  );
}

export default App;
