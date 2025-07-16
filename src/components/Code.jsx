import React from "react";
import { useState } from "react";
import "../App.css";

const Code = ({code,setCode}) => {
  return (
    <textarea
      className="code"
      value={code}
      onChange={(e)=>setCode(e.target.value)}
    ></textarea>
  );
};

export default Code;
