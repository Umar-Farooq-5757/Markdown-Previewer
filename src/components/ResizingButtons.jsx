import React from "react";
import { FaCode } from "react-icons/fa";
import { GoArrowBoth } from "react-icons/go";
import { MdOutlinePreview } from "react-icons/md";
import '../App.css'

const ResizingButtons = () => {
  return (
    <div className="buttons">
      <button className="btn">
        <FaCode  style={{width:'17px',height:'17px'}} />
        <span>Code</span>
      </button>
      <button className="btn">
        <GoArrowBoth style={{width:'17px',height:'17px'}} />
        <span>Both</span>
      </button>
      <button className="btn">
        <MdOutlinePreview style={{width:'17px',height:'17px'}}/>
        <span>Preview</span>
      </button>
    </div>
  );
};

export default ResizingButtons;
