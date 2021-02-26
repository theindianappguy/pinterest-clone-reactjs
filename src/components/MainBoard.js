import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pin from "./Pin";
import "./MainBoard.css";

export default function MainBoard({ pins }) {
  const [boardPins, setboardPins] = useState([]);

  useEffect(() => {
    setboardPins(pins);
  }, []);

  return (
    <Wrapper>
      <Container className="mainboard_container">
        {pins.map((pin, index) => {
          return <Pin url={pin.urls.regular} index={index} />;
        })}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-top: 15px;
`;

const Container = styled.div`
  column-gap: 5px;
  margin: 0 auto;
`;
