import React from "react";

//import components
import styled from "styled-components";
import Arrow from "../img/Arrow.svg";
import Arrow1 from "../img/Arrow-1.svg";
import Arrow2 from "../img/Arrow2.svg";
import Arrow3 from "../img/Arrow-right1.svg";
import Dot from "../img/Dot.svg";
import Rectangle from "../img/Rectangle-53.png";

const TestimonialContainer = styled.section`
  display: grid;
  justify-content: center;
  margin-top: 50px;
`;
const Testimonialcontent = styled.div`
  .Testimonial {
    display: flex;
    justify-content: center;
  }
  h1 {
    color: #ff9f0d;
    font-size: 1rem;
    font-family: Share Tech;
  }
`;
const Testimonialh1 = styled.div`
  padding: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`;
const Testimonialcontent1 = styled.div`
  padding: 10px 60px 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media Screen and (max-width: 1200px){
    padding: 10px 25px;
  }
  button {
    background-color: #143a5a;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 50px;
    width: 50px;
    color: #fff;
  }
  img {
    color: #fff;
  }
  .container {
    display: grid;
    justify-content: center;
    text-align: center;
    padding: 0px 30px;
    @media Screen and (max-width: 1200px){
      padding: 0px;
    }
  }
  .contain {
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-right: 50px;
  }
  .btn {
    padding: 20px;
    display: flex;
    align-items: flex-end;
    @media Screen and (max-width: 480px) {
      display: none;
    }
  }
  .btn1 {
    display: none;
    @media Screen and (max-width: 480px) {
      display: flex;
      justify-content: space-evenly;
    }
  }
  h1 {
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    color: #143a5a;
  }
  h3 {
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: #ff9f0d;
    padding: 10px;
  }
  p {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    max-width: 100ch;
  }
  .dot {
    height: 40px;
    width: 63px;
    left: 869px;
  }
`;

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <Testimonialcontent>
        <div className="Testimonial">
          <img src={Arrow1} alt="" />
          <h1>Testimonials</h1>
          <img src={Arrow} alt="" />
        </div>
        <Testimonialh1>
          What People Say About
          <br />
          Our Impact
        </Testimonialh1>
      </Testimonialcontent>
      <Testimonialcontent1>
        <div className="btn">
          <button>
            <img src={Arrow2} alt="" />
          </button>
        </div>
        <div className="container">
          <div className="contain">
            <img src={Dot} alt="" className="dot" />
            <img src={Rectangle} alt="" />
          </div>
          <h1>AYLEN ZEN</h1>
          <h3>South Africa</h3>
          <p>
            There Lorem Ipsum is simply dummy text of the printing and
            typesetting industry Lorem Ipsum is simply dummy text There Lorem
            Ipsum is simply dummy text. There Lorem Ipsum is simply dummy text
            of the printing and typesetting industry Lorem Ipsum is simply dummy
            text.
          </p>
          <div className="btn1">
            <div>
              <button>
                <img src={Arrow2} alt="" />
              </button>
            </div>
            <div>
              <button>
                <img src={Arrow3} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="btn">
          <button>
            <img src={Arrow3} alt="" />
          </button>
        </div>
      </Testimonialcontent1>
    </TestimonialContainer>
  );
};

export default Testimonial;
