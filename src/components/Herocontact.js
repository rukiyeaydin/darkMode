import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Lottie from "lottie-react";
import letter from "../assets/letter.json";

const Herocontact = () => {
  const form = useRef();
  const [missingFields, setMissingFields] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    const missing = [];

    // Check if fields are empty
    if (!form.current.user_name.value) missing.push('"Name"');
    if (!form.current.user_email.value) missing.push('"Email"');
    if (!form.current.message.value) missing.push('"Message"');

    if (missing.length > 0) {
      setMissingFields(missing);
      return;
    }

    emailjs.sendForm('service_lkh9awo', 'template_qzhhwjs', form.current, 'nHOlfoaHJQt7t232Q')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleClick = () =>{
    setMissingFields([]);
  }

  return (
    <StyledContactForm>
      <Lottie animationData={letter} className='letter' />
      <h1 style={{ color: 'white' }}>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Enter Your Name</label>
        <input type="text" name="user_name" id='username' />
        <label>Enter Your Email</label>
        <input type="email" name="user_email" id='mail' />
        <label>Message</label>
        <textarea name="message" id='message' />
        {missingFields.length > 0 && (
          <p style={{ color: 'red', backgroundColor:'white',marginTop:"5px", padding:"0px 5px", borderRadius:"3px", fontWeight:"600", fontSize:"medium" }}>Please, enter your : {missingFields.join(' , ')}</p>
        )}
        <input type="submit" value="SEND" className='send' onClick={handleClick} />
      </form>
    </StyledContactForm>
  );
}

export default Herocontact

const StyledContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .letter{
    margin-top: 10vh;
    width: 200px; height: "auto";
  }
  h1{
    font-weight: 800;
    font-size: x-large;
  }
  .send{
    margin-bottom: 5vh;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    font-size: large;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      font-size: medium;
      font-weight: 600;

      &:focus {
        border: 2px solid lime;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 3px solid rgb(220, 220, 220);
      font-size: medium;
      font-weight: 600;

      &:focus {
        border: 3px solid lime;
      }
    }

    label {
      margin: 2rem 0px 0.5rem 0px;
      color: white;
      font-weight:700;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: linear-gradient(to left, #eef2f3, #8e9eab);
      color: black;
      border: none;
      box-shadow: 1px 2px 16px 0px rgba(0,255,255,0.7);
      &:hover{
        box-shadow: 1px 2px 8px 0px rgba(0,255,255,0.7);
      }
    }
    @media screen and (max-width : 850px){
      width: 90%;
    }
  }
`;
