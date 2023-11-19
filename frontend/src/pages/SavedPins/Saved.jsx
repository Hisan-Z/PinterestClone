import React, {useContext, useState, useEffect} from "react";
import StackGrid from "react-stack-grid";
import "../../App.css";
import Pin from "../../components/Pin/Pin";
import NavbarComponent from "../../components/Navbar/Navbar";
import { SERVER_PIN_URL, SERVER_USER_URL } from "../../constants/urls"
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Saved = () => {
    
    const {user}=useContext(AuthContext)
    
  const { data, setdata } = useFetch(`${SERVER_USER_URL}/${user.ID}`)
  console.log("ds")
  console.log("ds")
  console.log("ds")
console.log(data)
  console.log(data.savedPins)

  const src_link=[]
  if (data && data.savedPins) {
    data.savedPins.map((objects) => {
      src_link.push([objects.img_source,objects._id,objects.link])
    });
  }
//   data?.savedPins.map((objects)=>{
//       console.log(objects)
//   })
  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
};
shuffle(src_link)
  
  return (
    <> 
      <NavbarComponent />
      
      <StackGrid
        columnWidth={
          window.innerWidth > 768
            ? (window.innerWidth - 40) / 5
            : (window.innerWidth - 20) / 2
        }
        monitorImagesLoaded={true}
        itemComponent="div"
        gutterWidth={20}
        gutterHeight={20}
        style={{ zIndex: 1 }}
      // horizontal={true}
      >

        {src_link.map((link, index) => (
          <a role="button" href={"pins/"+link[1]}>
          <Pin
            source={link[0]}
            key={"Div-" + index}
            id={"Div-" + index}
            style={{ row_no: 100 }}
            url={link[2]}
            pid={link[1]}
          />
          </a>
        ))}
        
      </StackGrid>
      </>
      );

};

      export default Saved;
