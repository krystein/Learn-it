import React from "react";

//import components
import styled from "styled-components";
import Arrow from "../img/Line-5.png";
import Arrow1 from "../img/Line-4.png";

const DonateContainer = styled.section`
  display: flex;
  justify-content: center;
  @media Screen and (max-width: 768px){
    justify-content: flex-start;
  }
`;
const DonatePage = styled.div`
  padding: 20px;
  display: Grid;
  justify-content: center;
  border-radius: 0px 30px;
  box-shadow: 0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5);
  @media Screen and (max-width: 768px) {
    padding: 5px;
    margin: 0px 10px;
    width: 100%;
  }
  h5 {
    padding: 10px;
  }
  .Donate {
    display: flex;
    justify-content: center;
    color: #ff9f0d;
  }
  img {
    margin: 10px;
    height: 1px;
    @media Screen and (max-width: 768px) {
      width: 100px;
    }
  }
  h1 {
    color: #143a5a;
    font-family: Inter, sans-serif;
    font-size: 1rem;
  }
`;
const Donateh1 = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 1rem;
`;
const Donatecontent = styled.div`
  .donate {
    padding: 10px;
    display: flex;
    
  }
`;
const Donatebtn = styled.div`
  margin-right: 10px;
  color: #143a5a;
  button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 100px;
  }
  :hover {
    background-color: #ff9f0d;
    border-radius: 0px 10px 8px 10px;
  }
`;
const Input = styled.div`
  padding: 10px;
  input {
    width: 514px;
    height: 60px;
    left: 703px;
    top: 6449px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 10px;
    @media Screen and (max-width: 480px){
      width: 320px;
    }
  }
`;
const Input1 = styled.div`
  padding: 10px;
`;
const Donatebtn1 = styled.div`
  padding: 10px;
  button {
    background-color: #143a5a;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 100%;
    color: #fff;
    @media Screen and (max-width: 480px) {
      width: 320px;
    }
  }
  .btn {
    background: transparent;
    color: #143a5a;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 100%;
    @media Screen and (max-width: 480px) {
      width: 320px;
    }
  }
`;

const Donate = () => {
  return (
    <DonateContainer>
      <DonatePage>
        <Donateh1>Donate Today</Donateh1>
        <h5>Select Amount</h5>
        <Donatecontent>
          <div className="donate">
            <Donatebtn>
              <button>$100.00USD</button>
            </Donatebtn>
            <Donatebtn>
              <button>$50.00USD</button>
            </Donatebtn>
            <Donatebtn>
              <button>$25.00USD</button>
            </Donatebtn>
          </div>
          <Input>
            <input type="text" placeholder="Other Amount" />
          </Input>
          <Input1>
            <input type="checkbox" />
            <label> Make This Month Donation</label>
          </Input1>
          <Donatebtn1>
            <button>Donate with Paypal</button>
          </Donatebtn1>
          <div className="Donate">
            <img src={Arrow1} alt="" />
            <h1>Or</h1>
            <img src={Arrow} alt="" />
          </div>
          <Donatebtn1>
            <button className="btn">Donate with Credit & Debit card</button>
          </Donatebtn1>
        </Donatecontent>
      </DonatePage>
    </DonateContainer>
  );
};

export default Donate;