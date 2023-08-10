import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Lottie from "lottie-react";
import letter from "../assets/letter.json";

const Herocontact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lkh9awo', 'template_qzhhwjs', form.current, 'nHOlfoaHJQt7t232Q')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <StyledContactForm>
      <Lottie animationData={letter} className='letter'/>
    <h1 style={{color: 'white'}}>Contact Me</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Enter Your Name</label>
      <input type="text" name="user_name" />
      <label>Enter Your Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="SEND" className='send'/>
    </form>
  </StyledContactForm>
  )
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
  }
`;
