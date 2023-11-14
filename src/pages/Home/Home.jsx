import React, {useState} from "react";
import StackGrid from "react-stack-grid";
import "../../App.css";
import Pin from "../../components/Pin/Pin";
import NavbarComponent from "../../components/Navbar/Navbar";
import { SERVER_PIN_URL } from "../../constants/urls"
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Home = () => {
  const { data, setdata } = useFetch(`${SERVER_PIN_URL}`)
  const src_link=[]
  data.map((objects,index)=>{
      src_link.push([objects.img_source,objects._id,objects.link])
  })
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
        {/* {src_link.map((link, index) => (
          <Pin
            source={link}
            key={"Div-" + index}
            id={"Div-" + index}
            style={{ row_no: 100 }}
          />
        ))} */}
      </StackGrid>
      </>
      );

};

      export default Home;
