import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import StackGrid from "react-stack-grid";
import { SERVER_PIN_URL } from "../../constants/urls";
import useFetch from "../../hooks/useFetch";
import NavbarComponent from "../../components/Navbar/Navbar";
import Icon from "react-icons-kit";
import { ic_keyboard_backspace_twotone } from "react-icons-kit/md/ic_keyboard_backspace_twotone";

const Explore = () => {

  const width = (window.innerWidth - 40) / 4;
  const { data, setData } = useFetch(`${SERVER_PIN_URL}/v/explore`)
  const src_link = []
  const navigate = useNavigate()
  data.map((objects, index) => {
    src_link.push([objects.img_source, objects.title, objects._id])
  })
  // const shuffle = (array) => {
  //   return array.sort(() => Math.random() - 0.5);
  // };

  const handleClick = async (e) => {
    const pid = e.target.id
    navigate("/category/" + pid)
  }
  const today = new Date().toDateString()
  return (
    <>
      <NavbarComponent />
      <button className="back-button left-top" onClick={() => { window.history.back() }}>
        <Icon icon={ic_keyboard_backspace_twotone} size={30} />
      </button>
      <div className="my-4">

        <h5 className="text-center">{today}</h5>
        <h2 className="text-center">Stay Inspired</h2>
      </div>
      <StackGrid
        columnWidth={
          window.innerWidth > 768
            ? (window.innerWidth - 10) / 4
            : (window.innerWidth - 20) / 1
        }
        monitorImagesLoaded={true}
        itemComponent="div"
        gutterWidth={20}
        gutterHeight={10}
      // horizontal={true}
      >
        {src_link.map((img, index) => (

          <div key={index} className="image" onClick={handleClick} >
            <img src={img[0]} alt="Something" style={{ width: width + 20, height: "40vh" }} id={img[2]} />
            <span className="text">{img[1]}</span>
          </div>
        ))}


      </StackGrid>
    </>
  );
};

export default Explore;
