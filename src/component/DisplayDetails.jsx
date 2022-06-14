
import React from "react";

let DisplayDetails = ({data}) =>{
    return <>
    {
       !data ? console.log("Nodata") : data.map((item) =>{
            return <div>
             <h2>Name : {item.name}</h2>
            <p>Age : {item.age}</p>
            <p>Deparment : {item.department}</p>
            <p>Married : {item.maritalstates ? <p>Yes</p> : <p>No</p>}</p>
            <p>Address : {item.adrress}</p>
            <p>Salary : {item.salary}</p>
            
            </div>
        })
    }
    </>
}
export default DisplayDetails; 
