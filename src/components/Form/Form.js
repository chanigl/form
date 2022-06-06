import React, { useState } from "react";
import "./Form.css";
import Print from "../Print/Print";

const Form = () => {
    const [userName, setUserName] = useState({}) 

    const clickFunction=(e)=>{
       
       const {placeholder , value} = e.target
        setUserName({...userName,[placeholder]:value})
        console.log(userName);
    }
    
    const submitFunction =(e)=>{
        e.preventDefault()
    }
    
  return (
    <>
      <div className="form-div">
        <h1>form home work</h1>
        <form onChange={clickFunction} onSubmit={submitFunction}>
          <div className="first">
            <input type="text" placeholder="first" />
          </div>
          <div>
            <input type="text" placeholder="last" />
          </div>
          <div>
            <input type="number" placeholder="age" />
          </div>
          <div>
            <input
              type="submit"
              value="send"
            /> 
          </div>
        </form>
        <Print first={userName.first} last={userName.last} age={userName.age}/>
      </div>
    </>
  );
};

export default Form;
