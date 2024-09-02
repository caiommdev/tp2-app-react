import { useState } from 'react';
import './App.css';
import NameShower from './NameShower';


function App() {
  const [value, setValue] = useState('');
  
  const onChangeInput = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
    <input onChange={onChangeInput}></input>
    <NameShower name={value}/>
    </>
  );
}

export default App;
