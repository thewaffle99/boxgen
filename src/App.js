import './App.css';
import React, { useState } from 'react';
import Form from './components/form';
import Display from './components/display';

function App() {
  
  const [boxList, setBoxList] = useState([]);


  return (
    <div className="App">

      <Form 
        boxList={boxList}
        setBoxList={setBoxList}
      />
      <Display boxList={boxList}/>
    </div>
  )
};

export default App;
