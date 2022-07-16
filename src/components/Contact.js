import React from "react";

//import components
import styled from "styled-components";
import Image from '../img/post-1.png';
import Arrow from "../img/Arrow.svg";
import Image1 from '../img/Advice.svg';
import Image2 from '../img/Donation.svg';
import Image3 from "../img/Volunteer.svg";
import Image4 from "../img/Membership.svg";


const ContactContainer = styled.section`
  margin-top: 30px;
  padding: 50px;
  display: flex;
  .Contact {
    display: flex;
  }
  h1 {
    font-family: Share Tech;
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #ff9f0d;
  }
  @media Screen and (max-width: 1200px) {
    display: grid;
    padding: 5px;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    padding: 5px;
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    padding: 5px;
  }
`;
const Contactcontent = styled.div`
  padding-left: 40px;
  width: 50%;
  @media Screen and (max-width: 1200px) {
    display: grid;
    width: 100%;
    padding-left: 0px;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    width: 100%;
    padding-left: 0px;
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    width: 100%;
    padding-left: 0px;
  }
  .cont{
    font-size: 1rem;
  }
  h5 {
    padding: 5px 10px;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #143a5a;
    @media Screen and (max-width: 1200px) {
      text-align: center;
    }
    @media Screen and (max-width: 768px) {
      text-align: center;
    }
    @media Screen and (max-width: 480px) {
      text-align: center;
    }
  }
`;
const Contactcontent1 = styled.div`
  width: 50%;
  padding-bottom: 20px;
  img {
    width: 100%;
  }
  @media Screen and (max-width: 1200px){
    width: 100%;
  }
  
`;
const Contacth1 = styled.div`
  padding: 5px 10px;
  display: flex;
  font-family: Laila, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: #143a5a;
`;
const Contactcontent2 = styled.div`
width: 100%;
padding: 10px;
  .donate {
    padding: 10px 0px;
    display: flex;
    @media Screen and (max-width: 1200px){
      justify-content: center;
      padding: 0px 0px 10px 0px;
    }
  }
  textarea {
    padding: 5px;
    width: 100%;
    height: 150px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 0px 10px;
  }
`;
const Contactselect = styled.div`
display: none;
@media Screen and (max-width: 1200px){
display: flex;
justify-content: center;
  select {
    padding: 5px 5px 5px 10px;
    width: 300px;
    height: 40px;
    background: #ff9f0d;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 10px;
    color: #fff;
  }
}
`;
const Contactbtn = styled.div`
  margin-right: 10px;
  color: #143a5a;
  @media Screen and (max-width: 1200px){
    margin-right: 0px;
  }
  .btn1 {
    background-color: #ff9f0d;
  }
  button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 134px;
    display: flex;
    align-items: center;
    padding: 20px;
    @media Screen and (max-width: 1200px) {
    display: none;
  }
  &:hover {
    background-color: #ff9f0d;
    border-radius: 0px 10px 8px 10px;
  }
`;
const Input = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0px;
  input {
    padding: 5px 5px 5px 10px;
    width: 48%;
    height: 40px;
    left: 703px;
    top: 6449px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 10px;
  }
`;
const Input1 = styled.div`
  padding: 10px 0px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  input {
    padding: 5px 5px 5px 10px;
    width: 48%;
    height: 40px;
    left: 703px;
    top: 6449px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 10px;
  }
  select {
    padding: 5px 5px 5px 10px;
    width: 48%;
    height: 40px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 10px;
  }
`;
const Contactbtn1 = styled.div`
  padding: 10px;
  button {
    background-color: #143a5a;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 25%;
    color: #fff;
  }
  .btn {
    background: transparent;
    color: #143a5a;
    border: 1px solid #143a5a;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 25%;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Contactcontent>
        <div className="Contact">
          <h1 className="cont">Contact Us</h1>
          <img src={Arrow} alt="" />
        </div>
        <Contacth1>Contact Form</Contacth1>
        <h5>Select Categories of Request</h5>
        <Contactcontent2>
          <div className="donate">
            <Contactselect>
              <select>
                <option>Advice</option>
                <option>Donation</option>
                <option>Volunteer</option>
                <option>Membership</option>
              </select>
            </Contactselect>
            <Contactbtn>
              <button className="btn1">
                <img src={Image1} alt="" className="btn" />
                Advice
              </button>
            </Contactbtn>
            <Contactbtn>
              <button>
                <img src={Image2} alt="" className="btn" />
                Donation
              </button>
            </Contactbtn>
            <Contactbtn>
              <button>
                <img src={Image3} alt="" className="btn" />
                Volunteer
              </button>
            </Contactbtn>
            <Contactbtn>
              <button>
                <img src={Image4} alt="" className="btn" />
                Membership
              </button>
            </Contactbtn>
          </div>
          <Input>
            <input type="text" placeholder="Johnathon Smith" />
            <input type="email" placeholder="Email Address" />
          </Input>
          <Input1>
            <input type="text" placeholder="Phone Number" />
            <select>
              <option>Location</option>
            </select>
          </Input1>
          <textarea placeholder="Description"></textarea>
        </Contactcontent2>
        <Contactbtn1>
          <button>Submit</button>
        </Contactbtn1>
      </Contactcontent>
      <Contactcontent1>
        <img src={Image} alt="" />
      </Contactcontent1>
    </ContactContainer>
  );
};

export default Contact;