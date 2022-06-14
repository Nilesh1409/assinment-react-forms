
import './App.css';
import React from 'react';
import {DetailsInput} from './component/DetailsForm';
import DisplayDetails from './component/DisplayDetails';

function App() {
  let [data,setData] = React.useState("")
  const getData =()=>{
    console.log("calledData")
    fetch(`http://localhost:3001/list`)
    .then((res) => res.json())
    .then((res) => setData(res))  
    .catch((err)=> console.log(err))
    console.log("updated data",data)
  }
  React.useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <DetailsInput getData={getData} />
      <div className='container'><DisplayDetails data= {data}/></div>
    </div>
  );
}

export default App;
