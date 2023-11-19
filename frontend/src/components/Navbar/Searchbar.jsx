import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate=useNavigate()
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (e.key=="Enter"){
      navigate("/search/"+searchInput)
    }
    else{

      setSearchInput(e.target.value);
    }
  }
  return (
    <div>
    <form>
      <InputGroup style={{ borderRadius: 50, marginLeft: 10, width:"calc(40vw)" }}>
        <InputGroup.Text onClick={handleSubmit} >
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control type="text" placeholder="Search here" onChange={handleChange} onKeyDown={handleSubmit}  />
      </InputGroup>
    </form>

    </div>
  );
};
export default Searchbar;
