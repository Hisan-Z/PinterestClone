import React, { useContext, useState, useEffect } from "react";
import "../../App.css";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { SERVER_PIN_URL, SERVER_USER_URL } from "../../constants/urls";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import {hasValue} from "../../helper/hasValue"


const PinHeader = (props) => {
  const [text, setText] = useState({
    text:"Save",
    style:{}
  });
  const {user}= useContext(AuthContext)
  const pid=props.pid
  const {data, setData}= useFetch( `${SERVER_USER_URL}/${user.ID}`)
  console.log("props")
  console.log(data)
  console.log(hasValue(data.savedPins,pid))
useEffect(() => {
  if (data && data.savedPins && hasValue(data.savedPins,pid)){
    console.log("ssaved")
    setText({
      text:"Saved",
      style:{color:"white",backgroundColor:"black",border:"black"}
    })
  }
}, [data]);
    
    
  
  const handleClick=async(e)=>{
    e.stopPropagation()
    if (text.text!=="Saved"){

      try{
        const res= await axios.post(`${SERVER_PIN_URL}//savepin/${user.ID}/${pid}`)
        setText({
          text:"Saved",
          style:{color:"white",backgroundColor:"black",border:"black"}
        })
        setTimeout(() => {
          
          window.location.reload()
        }, 2000);
      }catch(err){
        
      }
    }
    
  }
  return (
    <div>
      <Button variant="danger" style={text.style} className="display-over save-button" onClick={handleClick}>
        {text.text}
      </Button>
    </div>
  );
};

export default PinHeader;
