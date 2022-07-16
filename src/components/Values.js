import React from "react";

//import components
import styled from "styled-components";
import Arrow from "../img/Arrow.svg";
import Arrow1 from "../img/Arrow-1.svg";
import Image1 from "../img/Be-empathic.svg";
import Image2 from "../img/Be-inclusive.svg";
import Image3 from "../img/Be-leaders.svg";
import Image4 from "../img/Be-trustworthy.svg";

const ValueContainer = styled.section`
  margin-top: 30px 0px;
  .Value {
    display: flex;
    justify-content: center;
    color: #ff9f0d;
  }
`;
const Valueh1 = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  color: #143a5a;
  font-family: Inter, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`;
const ValueContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 20px 70px;
  @media Screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media Screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media Screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const ValueImg = styled.img`
`;
const ValueH = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  font-family: Inter, sans-serif;
  text-align: center;
  @media Screen and (max-width: 1200px) {
    text-align: left;
  }
  @media Screen and (max-width: 768px) {
    text-align: left;
  }
  @media Screen and (max-width: 480px) {
    text-align: left;
  }
`;
const Valueh2 = styled.div`
  font-weight: 400;
  font-size: 1rem;
  font-family: Inter, sans-serif;
  text-align: center;
  @media Screen and (max-width: 1200px) {
    text-align: left;
  }
  @media Screen and (max-width: 768px) {
    text-align: left;
  }
  @media Screen and (max-width: 480px) {
    text-align: left;
  }
`;

const Values = () => {
  return (
    <ValueContainer>
      <div className="Value">
        <img src={Arrow1} alt="" />
        <h1>Gallery</h1>
        <img src={Arrow} alt="" />
      </div>
      <Valueh1>Our Values</Valueh1>
      <ValueContent>
        <div>
          <ValueImg src={Image1} alt="" className="img1" />
          <ValueH>Be empathic</ValueH>
          <Valueh2>
            We put ourselves in the other person’s shoes, we take time to
            understand his/her/their lived experience
          </Valueh2>
        </div>
        <div>
          <ValueImg src={Image2} alt="" className="img1" />
          <ValueH>Be inclusive</ValueH>
          <Valueh2>
            Be inclusive We welcome diversity of voice, experiences and
            perspectives
          </Valueh2>
        </div>
        <div>
          <ValueImg src={Image3} alt="" className="img1" />
          <ValueH>Be leaders</ValueH>
          <Valueh2>
            We lead in the community leveraging our resources to benefit our
            charitable partners
          </Valueh2>
        </div>
        <div>
          <ValueImg src={Image4} alt="" className="img1" />
          <ValueH>Be trustworthy</ValueH>
          <Valueh2>
            We earn the trust of our donors, our community and charitable
            partners by being present, transparent and accessible
          </Valueh2>
        </div>
      </ValueContent>
    </ValueContainer>
  );
};

export default Values;
