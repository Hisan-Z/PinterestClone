import React, { useState, createContext } from "react";
import { Carousel } from "react-bootstrap";
// import "../../App.css";
import "./Slideshow.css"
import Logo from "../BounceButton/Arrow";
import Pinboard from "./Pinboard";
import Loading from "../BounceButton/Loading";

const UserContext = createContext();

const SlideShow = () => {
  const subTitles_array = [
    "travel destination",
    "outfit idea",
    "cheat day meal",
    "dose of cat cuteness "
  ];
  const color = [
    "rgb(80, 122, 87)",
    "rgb(0, 118, 211)",
    "rgb(194, 139, 0)",
    "rgb(81, 140, 123)"
  ];
  
  const [subtitle, setSubtitle] = useState(subTitles_array[0]);
  const [board, setBoard] = useState(0);
  const handleChange = (e) => {
    setSubtitle(subTitles_array[e]);
    setBoard(e);
  };

  return (
    <>
    <div>
      <Carousel
        indicatorLabels={false}
        controls={false}
        onSlide={handleChange}
        slide={false}
        interval={6200}
        className="mt-4"
      >
        {subTitles_array.map((val, index) => (
          <Carousel.Item key={index} style={{ "--custom_color": color[index] }}>
            <span className="bg_white"></span>
            <Carousel.Caption>
              <h3 className="subtitle">{subtitle}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="covertext">
        <h2 className="title">Get your next</h2>
      </div>
      <a href='#save'>
      <Loading logo={<Logo />} />

      </a>
      <UserContext.Provider value={board}>
        <Pinboard />
      </UserContext.Provider>
    </div>
    {/* <ImageGrid/> */}
    </>
  );
};

export default SlideShow;
export { UserContext };
