import React from "react";
import { useState } from "react";
import "./header.css"; // Importing css file


const Header = () => {


  const [aiml_content, setAimlContent] = useState("none");
  const [bs_content, setBsContent] = useState("none");  
  const [ds_content, setDsContent] = useState("none");

  function mouseOverBranch_aiml() {
    setAimlContent("flex");
    aiml_content == "none" ? setAimlContent("flex") :setAimlContent("none");
  }
  function mouseOverBranch_bs(){
    setBsContent("flex");
    bs_content == "none" ? setBsContent("flex") :setBsContent("none");
  }
  function mouseOverBranch_ds(){
    setDsContent("flex");
    ds_content == "none" ? setDsContent("flex") :setDsContent("none");
  }

  return (
    <>
      <div className="header">
        <img src="#" alt="logo" />
        <nav>
          <ul>
            <li
              className="branch_1"
              onClick={mouseOverBranch_aiml}>
              <h2 className="branch_aiml"> AIML </h2>
            </li>
            <li
              className="branch_1"
              onClick={mouseOverBranch_bs}>
              <h2 className="branch_aiml"> CSBS </h2>
            </li>
            <li
              className="branch_1"
              onClick={mouseOverBranch_ds}>
              <h2 className="branch_aiml"> CSDS </h2>
            </li>
          </ul>
        </nav>
      </div>
      <div className="body">
        <div className="aiml_content branch_1" style={{ display: aiml_content }}>
          <div className="aiml_sem_1 aiml_dropdown">
            <h3>SEM 1</h3>
            <ul>
              <li>AIML-1</li>
              <li>AIML-2</li>
              <li>AIML-3</li>
              <li>AIML-4</li>
            </ul>
          </div>
          <div className="aiml_sem_1 aiml_dropdown">
            <h3>SEM 2</h3>
            <ul>
              <li>AIML-1</li>
              <li>AIML-2</li>
              <li>AIML-3</li>
              <li>AIML-4</li>
            </ul>
          </div>
          <div className="aiml_sem_2"></div>
        </div>


        <div className="aiml_content branch_1" style={{ display:bs_content }}>
          <div className="aiml_sem_1 aiml_dropdown">
            <h3>SEM 1</h3>
            <ul>
              <li>CSBS-1</li>
              <li>CSBS-2</li>
              <li>CSBS-3</li>
              <li>CSBS-4</li>
            </ul>
          </div>
          <div className="aiml_sem_1 aiml_dropdown">
            <h3>SEM 2</h3>
            <ul>
              <li>CSBS-1</li>
              <li>CSBS-2</li>
              <li>CSBS-3</li>
              <li>CSBS-4</li>
            </ul>
          </div>
          <div className="aiml_sem_2"></div>
        </div>

        <div className="aiml_content branch_1" style={{ display:ds_content }}>
          <div className="aiml_sem_1 aiml_dropdown">
            <h3>SEM 1</h3>
            <ul>
              <li>CSDS-1</li>
              <li>CSDS-2</li>
              <li>CSDS-3</li>
              <li>CSDS-4</li>
            </ul>
          </div>
          <div className="aiml_sem_1 aiml_dropdown">
            <h3>SEM 2</h3>
            <ul>
              <li>CSDS-1</li>
              <li>CSDS-2</li>
              <li>CSDS-3</li>
              <li>CSDS-4</li>
            </ul>
          </div>
          <div className="aiml_sem_2"></div>
        </div>



      </div>
    </>
  );
};

export default Header;
