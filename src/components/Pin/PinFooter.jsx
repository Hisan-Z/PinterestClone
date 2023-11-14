import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {Icon} from "react-icons-kit";
import {ic_call_made_twotone} from 'react-icons-kit/md/ic_call_made_twotone';
import {ic_file_upload} from 'react-icons-kit/md/ic_file_upload';
import parseUrl from 'url-parse';

const PinFooter = (props) => {
  const url = parseUrl(props.url);
  const hostname = url.hostname;
  return (
    <div className="display-over-bottom">
      <Button variant="dark" className="rounded-pill d-block px-2 m-2 url" style={{width:"100%"}}>
        <Icon className="absolute m-10" icon={ic_call_made_twotone} size={15} />      
        <span className=""> <a className="text-light text-decoration-none " href={props.url}>{hostname}</a>  </span>
        
      </Button>
      <Button variant="dark" className="rounded-circle m-2">
        <Icon className="absolute m-10" icon={ic_file_upload} size={20} />      
      </Button>
      {/* {menu ? <DropDown /> : null} */}
    </div>
  );
};

export default PinFooter;
