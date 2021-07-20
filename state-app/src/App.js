import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import stateData from './statedata/index';
import SelectedState from './components/SelectedState';

function App() {
  const [selectedState, setSelectedState] = useState(null);

  console.log(stateData)

  const displayDropDown = () => {
    let stateObjs = [];
    for (let i = 0; i < stateData.length; i++) {
      stateObjs.push(<option key={i} value={stateData[i]['alpha-2']}>{ stateData[i].name }</option>)

    }
    return stateObjs

  }

  const handleChange = (evt) => {
    setSelectedState(evt.target.value)
  }


  return (
    <div className="App">
      <h1>Select State From Dropdown menu</h1>
      <select onChange={handleChange}>
        {
          displayDropDown()
        }
      </select> 
      {      
        selectedState && <SelectedState selectedState={selectedState} />
      }
    </div>
  );
}

export default App;
