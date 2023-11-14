import React, { useState, createContext, useContext } from "react";
import "../../App.css";
import { useHistory, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

const UploadImg = () => {
  const [file, setFile] = useState("");
  const navigate=useNavigate()

  const handleChange = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload_preset");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dsdz7dwu4/image/upload",
        data
      );
        console.log(uploadRes)
      const { version }= uploadRes.data
      const { public_id } = uploadRes.data
      const { url } = uploadRes.data;


      navigate(`/pinForm?v=${version}&pid=${public_id}`)
      
      } catch (err) {
        alert(err)
      }
    };

  
  return (
    <div>
      <label htmlFor="upload_img" className="d-block">
        <div className="upload_img_container">
          <div id="dotted_border">
            <div className="pint_mock_icon_container">
              <img
                src="https://www.freeiconspng.com/thumbs/up-arrow-png/black-up-arrow-png-22.png"
                alt="upload_img"
                className="pint_mock_icon"
              />
            </div>
            <div>Click to upload</div>
            <div>Recommendation: Use high-quality .jpg less than 20MB</div>
          </div>
        </div>
      </label>
      <form
        
        enctype="multipart/form-data"
        name="uploading"
      >
        <input
          type="file"
          // accept="image/*"
          name="upload_img"
          id="upload_img"
          onInput={(e)=>{setFile(e.target.files[0])}}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default UploadImg;



  