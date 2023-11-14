import axios from "axios";
import Detail from "../../components/PinCreateForm/Detail";
import Moreoption from "../../components/PinCreateForm/Moreoption";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { SERVER_PIN_URL, DEFAULT_IMG_URL } from "../../constants/urls";
import { AuthContext } from "../../context/AuthContext";

const PinForm = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const imageUrl = "http://res.cloudinary.com/dsdz7dwu4/image/upload/v" + queryParameters.get("v") + "/" + queryParameters.get("pid")
  const [option, setOption] = useState("");
  const [data, setData] = useState([])
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { loading, error, dispatch } = useContext(AuthContext);

  useEffect(() => {
    setData((prev) => {
      return { ...prev, tags: tags};
    });
    
  }, [tags]);

  const navigate = useNavigate()

  const handleSelection = (value) => {
    setOption(value);
  }
  const handleInput = (e) => {

    setInputValue(e.target.value)
  }

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);

  };

  const handleChange = (e) => {

    if (e.target.name === "allow_comment") {
      const name = e.target.name
      const checked = e.target.checked
      setData((prev) => {
        return { ...prev, [name]: checked };
      });
    }
    else {

      const { name, value } = e.target
      setData((prev) => {
        return { ...prev, img_source: imageUrl, extras: option, tags: tags, [name]: value };
      });
    }

  }

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      // Prevent empty tags from being added
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${SERVER_PIN_URL}/create`, data);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
    
      <div className="row g-5 mt-3">

        <div className="col-md-6 col-lg-5 order-md-first  " >
          <div className="d-flex justify-content-end">
            <img src={imageUrl ? imageUrl : DEFAULT_IMG_URL} alt="uploaded" className="thumbnail" ></img>

          </div>
        </div>
        <div className="col-md-6 col-lg-7">

          <Form className="p-3 m-3 form">
            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Add Title" name="title" onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel
              label="Description"
              className="mb-3"
            >
              <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Add Description" name="description" onChange={handleChange} />
            </FloatingLabel>
            

            <Detail onSelect={handleSelection} />
            <FloatingLabel
              label="Link"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Add a link" name="link" onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel
              label="Tags"
              className="mb-3"
            >
              <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Add tags" onInput={handleInput} name="tags" onKeyPress={handleInputKeyPress} value={inputValue} />
            </FloatingLabel>
            <div>
              {tags.map((tag, index) => (
                <Button variant="dark" key={index} className="m-2">
                  {tag}
                  <span
                    className="ms-2"
                    onClick={() => handleTagRemove(tag)}
                  >
                    &#x2715;
                  </span>
                </Button>
              ))}
            </div>
            <Moreoption onChange={handleChange} />

            <Button className="mt-3 w-100" variant="danger" type="submit" onClick={handleSubmit}>Post</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default PinForm;
