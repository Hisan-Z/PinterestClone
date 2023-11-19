import React, { useContext, useState } from "react";
import PinHeader from "./PinHeader";
import PinFooter from "./PinFooter";
import { AuthContext } from "../../context/AuthContext";
const Pin = (props) => {
  const [hover, setHover] = useState(false);
  const width = (window.innerWidth - 40) / 5;
  const {user}= useContext(AuthContext)

  const r_no = props.style.row_no;
  const style = {
    marginTop:
      r_no === 0
        ? props.style.margin < 4
          ? 80 * props.style.margin + "px"
          : 80 * (6 - props.style.margin) + "px"
        : "None"
    , width: width
  };

// Show the pin header and footer
  const handleMouseIn = (e) => {
    const sc = document.getElementById(props.id);
    const height = e.target.getAttribute("height");
    const width = e.target.getAttribute("width");
    sc.setAttribute("class", "hover");
    sc.setAttribute(
      "style",
      "--height:" + height + "px;--width:" + width + "px"
    );
    setHover(!hover);
  };

  const handleMouseOut = () => {
    const sc = document.getElementById(props.id);
    sc.removeAttribute("class");
    setHover(!hover);
  };

  return (
    <div
      className="image"
      onMouseEnter={user ? handleMouseIn : null}
      onMouseLeave={user ? handleMouseOut : null}
      style={style}
    >
      {hover ? <PinHeader pid={props.pid} /> : null }
      <div id={props.id}></div>
      <img
        src={props.source}
        alt="Pin"
        width={width}
        height="auto"
      />
      {hover ? <PinFooter url={props.url} /> : null }
    </div>
  );
};

export default Pin;
