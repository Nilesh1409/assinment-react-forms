import React from "react";

let DetailsInput = ({getData}) =>{
    let [formData, setFormData] = React.useState({
        name : "",
        age : "",
        address : "",
        department : "",
        salary : "",
        maritalstates : false,
        
    })
    let handleChange = (e) =>{
        let {name,value,checked} = e.target;
        value = name === "maritalstates" ? checked : value;

        setFormData((prv) => ({...prv, [name] : value}))
        
    }
    const addData = () =>{
        fetch(`http://localhost:3001/list`,{
            method : "POST",
            body : JSON.stringify(formData),
            headers : {
                "content-type" : "application/json"
            }
            
        })
        .then((res) => res.json())
        .then((res) => getData())
    }

    let {name,age,address,department,salary,maritalstates} = formData;

    return (
        <div className="form">
            <input onChange={handleChange} placeholder="Name" type="text" name="name" value={name} />
            <input onChange={handleChange} placeholder="Age" type="number" name="age" value={age} />
            <input onChange={handleChange} placeholder="Address" type="text" name="address" value={address} />
            <input onChange={handleChange} placeholder="Salary" type="number" name="salary" value={salary} />
            <label > Married : 
            <input onChange={handleChange} type="checkbox" name="maritalstates" checked={maritalstates}  />
            </label>
            <select onChange={handleChange} name="department" >
                <option value="NotGiven">Select</option>
                <option value="fronthend">Fronthend</option>
                <option value="backhend">Backhend</option>
            </select>
            <button onClick = {addData} >SUBMIT</button>
        </div>
    )
}
export {DetailsInput};